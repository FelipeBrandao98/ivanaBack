import { ApiProperty } from '@nestjs/swagger'
import { Comments } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class CommentEntity implements Comments {
  @ApiProperty()
  id: number

  @ApiProperty()
  userName: string

  @ApiProperty()
  avaliation: number

  @ApiProperty()
  description: string

  @ApiProperty()
  likes: number

  @ApiProperty()
  isActive: boolean

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  imageId: number | null

  @ApiProperty({ type: ImagesEntity })
  image: ImagesEntity
}
