import { ApiProperty } from '@nestjs/swagger'

export class CreateCollectiosCategoryDto {
  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: true })
  subdescription: string
}
