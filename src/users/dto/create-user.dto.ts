// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Validators Pipe Imports
import {
  Contains,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator'

// class declaration
export class CreateUserDto {
  // Properties
  @IsNotEmpty()
  @IsString()
  @Contains(' ', { message: 'Must contain a Name and Last Name' })
  @ApiProperty({ required: true, example: 'Fulano de tal' })
  name: string

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ required: true, example: 'exemple@exemple.com' })
  email: string

  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({ required: true, example: '*******' })
  password: string

  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({ required: true, example: 'Must be equal to password' })
  confirmPassword: string

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ required: true })
  birthDate: Date
  //
}
