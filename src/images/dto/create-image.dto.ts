import { ApiProperty } from '@nestjs/swagger'

export class CreateImageDto {
  @ApiProperty({ required: false })
  src: string

  @ApiProperty()
  url: string

  @ApiProperty({ required: false })
  author?: string
}
