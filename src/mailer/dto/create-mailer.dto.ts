import { ApiProperty } from '@nestjs/swagger'
import {
  Contains,
  IsLowercase,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator'

export class CreateMailerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(320)
  @Contains('@')
  @IsLowercase()
  @ApiProperty({ required: true })
  mail: string
}
