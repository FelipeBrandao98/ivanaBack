import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty({ required: true })
  title: string

  @ApiProperty({ required: true })
  categoryId: number

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

  @IsString()
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
