import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy'
import { UsersModule } from 'src/users/users.module'

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
export class AuthModule {}
