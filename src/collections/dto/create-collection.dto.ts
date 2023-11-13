// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Validators Pipe Imports
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

// Class declaration
export class CreateCollectionDto {
  // Properties
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection title in Portuguese from brazil',
  })
  title: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection title in Deutsch',
  })
  titleDe: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection title in English',
  })
  titleEn: string

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection title in French',
  })
  titleFr: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection description in Portuguese from brazil',
  })
  description: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection description in Deutsch',
  })
  descriptionDe: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection description in English',
  })
  descriptionEn: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: true,
    example: 'Please, use the collection description in French',
  })
  descriptionFr: string

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: 'number',
    example: 'Please, use the id from category',
  })
  categoryId: number

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: 'number',
    example: 'Please, use the id from cover',
  })
  coverId: number
  //
}
