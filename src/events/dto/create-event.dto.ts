import { ApiProperty } from '@nestjs/swagger'
import {
  Contains,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator'

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty({ required: true })
  title: string

  @IsString()
  @IsNotEmpty()
  @Contains('http://')
  @ApiProperty({ required: true })
  cover: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  coverCredit: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  subtitle: string

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  publishDate: Date

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  published: boolean

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  body: string
}