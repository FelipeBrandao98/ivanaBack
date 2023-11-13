// NestJs imports
import { Injectable, UnauthorizedException } from '@nestjs/common'

// Services imports
import { UsersService } from 'src/users/users.service'

// Validate Jwt Strategy imports
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { jwtSecret } from './auth.module'

@Injectable()
// Class declaration
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  // Constructor Method
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    })
  }
  //

  // Properties
  async validate(payload: { userId: string }) {
    const user = await this.usersService.findOne(payload.userId)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
  //
}
