// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Class Validators imports
import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

// Class declaration
export class CreateNewscategoryDto {
  // Properties
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: true })
  description: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: false })
  descriptionDe?: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: false })
  descriptionEn?: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: false })
  descriptionFr?: string
  //
}
