import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsLowercase, IsNotEmpty, IsString } from 'class-validator'

export class SendMailDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  @ApiProperty({ required: true })
  email: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  message: string
}
