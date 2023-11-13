// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Validators Pipe Imports
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator'

// class declaration
export class LoginDto {
  // Properties
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ required: true, example: 'exemple@exemple.com' })
  email: string

  @IsNotEmpty()
  @IsStrongPassword()
  @IsString()
  @MinLength(8)
  @ApiProperty({
    required: true,
    minLength: 8,
    type: 'Strong Password',
    example: 'Must contain 1 special character',
  })
  password: string
  //
}
