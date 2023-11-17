// NestJs imports
import { Body, Controller, Post } from '@nestjs/common'

// NestJs - Swagger imports
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

// DTOs imports
import { LoginDto } from './dto/login.dto'

// Services imports
import { AuthService } from './auth.service'

// Entities imports
import { AuthEntity } from './entities/auth.entity'

@ApiTags('Login')
@Controller('login')
// Class declaration
export class AuthController {
  // Constructor Method
  constructor(private readonly authService: AuthService) {}
  //

  // Properties
  @Post()
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() loginDto: LoginDto): Promise<AuthEntity> {
    const authorization = await this.authService.login(loginDto)

    return new AuthEntity(authorization)
  }
  //
}
