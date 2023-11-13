// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controllers imports
import { AuthController } from './auth.controller'

// Services imports
import { AuthService } from './auth.service'

// Modules imports
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { UsersModule } from 'src/users/users.module'

// Strategies imports
import { JwtStrategy } from './jwt.strategy'

// declaration of Secret from enviroments path
export const jwtSecret = process.env.JWT_SECRET

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    PrismaModule,
    PassportModule,
    UsersModule,
    JwtModule.register({ secret: jwtSecret, signOptions: { expiresIn: '1d' } }),
  ],
})
// Classe declaration
export class AuthModule {
  // Properties
}
