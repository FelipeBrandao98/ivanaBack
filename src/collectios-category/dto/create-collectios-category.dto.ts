import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateCollectiosCategoryDto {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  description: string

  @IsNotEmpty()
  @ApiProperty({ required: true })
  subdescription: string

  @IsOptional()
  @ApiProperty({ required: false })
  coverId: number
}
