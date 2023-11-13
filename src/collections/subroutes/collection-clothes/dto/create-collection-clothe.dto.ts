// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Validators Pipe Imports
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

// Class declaration
export class CreateCollectionClotheDto {
  // Properties
  @IsNumber()
  @ApiProperty({ required: false })
  likes: number

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  name: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  nameDe: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  nameFr: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  nameEn: string

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: false })
  collectionId: number

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: false })
  coverId: number
  //
}
