// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Class Declaration
export class AuthEntity {
  // Constuctor Method
  constructor(partial: Partial<AuthEntity | string>) {
    Object.assign(this, partial)
  }
  //

  // Properties
  @ApiProperty({ required: true, type: 'JwtToken', example: 'JwtToken' })
  accessToken: string
  //
}
