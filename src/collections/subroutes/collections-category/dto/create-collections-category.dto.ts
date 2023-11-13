// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Validators Pipe Imports
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

// Class declaration
export class CreateCollectionsCategoryDto {
  // Properties
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example:
      'Please, use the name from collection category in Portugues from brazil',
  })
  description: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Please, use the name from collection category in Deutsch',
  })
  descriptionDe: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Please, use the name from collection category in English',
  })
  descriptionEn: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Please, use the name from collection category in French',
  })
  descriptionFr: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example:
      'Please, use the description from collection category in Portugues from brazil',
  })
  subdescription: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Please, use the description from collection category in Deutsch',
  })
  subdescriptionDe: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Please, use the description from collection category in English',
  })
  subdescriptionEn: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'Please, use the description from collection category in French',
  })
  subdescriptionFr: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    required: true,
    type: 'number',
    example: 'Please, use the id from cover',
  })
  coverId: number
  //
}
