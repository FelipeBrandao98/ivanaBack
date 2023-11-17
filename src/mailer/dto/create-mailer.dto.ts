import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsLowercase, IsNotEmpty, IsString } from 'class-validator'

export class CreateMailerDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @IsLowercase()
  @ApiProperty({ required: true })
  mail: string
}
