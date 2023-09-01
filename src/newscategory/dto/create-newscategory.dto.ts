import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateNewscategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: true })
  description: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: false })
  descriptionDe?: string | null

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: false })
  descriptionEn?: string | null

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({ required: false })
  descriptionFr?: string | null
}
