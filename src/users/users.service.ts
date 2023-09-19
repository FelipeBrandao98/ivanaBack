import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma/prisma.service'

import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.confirmPassword) {
      return 'Passwords must match'
    }

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      process.env.BCRYPT_SALT,
    )

    createUserDto.password = hashedPassword
    delete createUserDto.confirmPassword

    return this.prisma.user.create({ data: createUserDto })
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        process.env.BCRYPT_SALT,
      )
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    })
  }
}
