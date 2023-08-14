import { ApiProperty } from '@nestjs/swagger'
import {
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

  @ApiProperty({ required: false })
  coverID: number

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
