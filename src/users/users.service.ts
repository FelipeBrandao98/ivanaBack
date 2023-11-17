// NestJs imports
import { Injectable } from '@nestjs/common'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// DTOs imports
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

// Hash Script imports
import * as bcrypt from 'bcrypt'

// Errors imports
import { PasswordException } from 'src/filters/exceptions/password-match.filter'
import { UserExists } from 'src/filters/exceptions/user-exists.filter'

@Injectable()
// class declaration
export class UsersService {
  // Constructor Method
  constructor(private prisma: PrismaService) {}
  //

  // CRUD Operations - Properties
  async create(createUserDto: CreateUserDto) {
    // Confirm if has password and confirmPassword and confirm if passwords Match
    //
    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new PasswordException()
    }
    //

    //  Check if e-mail has alredy in use
    //
    const userExists = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    })
    //
    if (userExists) {
      throw new UserExists()
    }
    //

    //  Encrypt password and delete confirm password to create user
    //
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      process.env.BCRYPT_SALT,
    )
    // change plain text password to encrypted password
    createUserDto.password = hashedPassword
    // delete confirmPass collumn from createUserDto Object
    delete createUserDto.confirmPassword
    //

    // Create User
    return await this.prisma.user.create({ data: createUserDto })
  }

  async findMany() {
    return await this.prisma.user.findMany()
  }

  async findOne(userId: string) {
    return await this.prisma.user.findUnique({ where: { id: userId } })
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    // Check If has password to update
    //
    if (updateUserDto.password) {
      // Confirm if has password and confirmPassword and confirm if passwords Match
      if (updateUserDto.password !== updateUserDto.confirmPassword) {
        throw new PasswordException()
      }
      // Encrypt password and delete confirm password to create user
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        process.env.BCRYPT_SALT,
      )
      //
      delete updateUserDto.confirmPassword
    }
    //

    return await this.prisma.user.update({
      where: { id: userId },
      data: updateUserDto,
    })
  }
  //
}
