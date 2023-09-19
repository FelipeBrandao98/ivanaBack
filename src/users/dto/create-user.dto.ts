import { ApiProperty } from '@nestjs/swagger'
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string

  @ApiProperty()
  @IsStrongPassword()
  @IsNotEmpty()
  confirmPassword: string

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  birthDate: Date
}
