// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Validators Pipe Imports
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'

// Class declaration
export class CreateCollectionClotheDto {
  // Properties
  @IsNumber()
  @ApiProperty({ required: false })
  likes: number

  @IsBoolean()
  @ApiProperty({ required: false })
  isProduct: boolean

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
  name: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
  nameDe: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
  nameFr: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: false })
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
