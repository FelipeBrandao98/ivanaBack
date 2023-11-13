// NestJs imports
import { Injectable, UnauthorizedException } from '@nestjs/common'

// Class to extend to transform in GuardDecorator
import { AuthGuard } from '@nestjs/passport'

@Injectable()
// Class declaration
export class JwtAuthGuard extends AuthGuard('jwt') {
  // Properties
  handleRequest<TUser = any>(err: any, user: any): TUser {
    if (!user) {
      throw new UnauthorizedException('Invalid Token')
    }

    if (err) {
      throw new UnauthorizedException('Is something wrong with your token!')
    }

    return user
  }
  //
}
