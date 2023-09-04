import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateCollectionsCategoryDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  description: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, nullable: true })
  descriptionDe?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, nullable: true })
  descriptionEn?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false, nullable: true })
  descriptionFr?: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  subdescription: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  subdescriptionDe?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  subdescriptionEn?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  subdescriptionFr?: string

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  coverId: number
}
