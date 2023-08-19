import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateCollectiosCategoryDto {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  description: string

  @IsNotEmpty()
  @ApiProperty({ required: true })
  subdescription: string
}
