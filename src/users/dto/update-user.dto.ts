// NestJs - Swagger imports
import { PartialType } from '@nestjs/swagger'

// Class who is extended imports
import { CreateUserDto } from './create-user.dto'

// class declaration
export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Properties
}
