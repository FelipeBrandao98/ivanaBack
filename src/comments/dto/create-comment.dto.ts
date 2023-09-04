import { ApiProperty } from '@nestjs/swagger'

export class CreateCommentDto {
  @ApiProperty({ required: true })
  userName: string

  @ApiProperty()
  avaliation: number

  @ApiProperty()
  description: string

  @ApiProperty()
  likes: number

  @ApiProperty()
  isActive: boolean

  @ApiProperty({ required: false })
  imageId?: number
}
