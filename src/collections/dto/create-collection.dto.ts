import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateCollectionDto {
  @IsString()
  @ApiProperty()
  title: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  titleDe?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  titleEn?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  titleFr: string

  @IsString()
  @ApiProperty()
  description: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descriptionDe?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descriptionEn?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descriptionFr?: string

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  categoryId?: number

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  coverId?: number
}
