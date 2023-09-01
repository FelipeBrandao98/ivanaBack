import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateCollectiosCategoryDto {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  description: string

  @IsNotEmpty()
  @ApiProperty({ required: false, nullable: true })
  descriptionDe?: string

  @IsNotEmpty()
  @ApiProperty({ required: false, nullable: true })
  descriptionEn?: string

  @IsNotEmpty()
  @ApiProperty({ required: false, nullable: true })
  descriptionFr?: string

  @IsNotEmpty()
  @ApiProperty({ required: true })
  subdescription: string

  @IsNotEmpty()
  @ApiProperty({ required: false })
  subdescriptionDe?: string

  @IsNotEmpty()
  @ApiProperty({ required: false })
  subdescriptionEn?: string

  @IsNotEmpty()
  @ApiProperty({ required: false })
  subdescriptionFr?: string

  @IsOptional()
  @ApiProperty({ required: false })
  coverId: number
}
