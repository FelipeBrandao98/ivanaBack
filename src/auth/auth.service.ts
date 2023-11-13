// NestJs imports
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'

// Prisma imports
import { PrismaService } from './../prisma/prisma.service'

// DTOs imports
import { LoginDto } from './dto/login.dto'

// Hash Script imports
import * as bcrypt from 'bcrypt'

// Services imports
import { JwtService } from '@nestjs/jwt'

// Entities imports
import { AuthEntity } from './entities/auth.entity'

@Injectable()
// Class declaration
export class AuthService {
  // Constructor Method
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}
  //

  // CRUD Operations - Properties
  async login(loginDto: LoginDto): Promise<AuthEntity> {
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    })

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for email: ${loginDto.email}`)
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    )

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password')
    }

    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    }
  }
  //
}
