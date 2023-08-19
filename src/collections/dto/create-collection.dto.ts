import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateCollectionDto {
  @IsString()
  @ApiProperty()
  title: string

  @IsString()
  @ApiProperty()
  description: string

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  categoryId?: number

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  coverId?: number
}
