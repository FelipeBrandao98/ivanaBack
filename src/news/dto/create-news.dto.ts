import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty({ required: true })
  title: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty({ required: false })
  titleDe?: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty({ required: false })
  titleEn?: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(320)
  @ApiProperty({ required: false })
  titleFr?: string

  @ApiProperty({ required: true })
  categoryId: number

  @ApiProperty({ required: false })
  coverId: number

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  coverCredit: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  coverCreditDe?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  coverCreditEn?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  coverCreditFr?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  subtitle: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  subtitleDe?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  subtitleEn?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  subtitleFr?: string

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

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  bodyDe?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  bodyEn?: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  bodyFr?: string
}
