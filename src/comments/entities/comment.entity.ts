// NestJs imports
import { Exclude } from 'class-transformer'

/// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { Comments } from '@prisma/client'

// Entities imports
import { ImagesEntity } from 'src/images/entities/image.entity'

export class CommentEntity implements Comments {
  // Properties
  @ApiProperty()
  id: number

  @ApiProperty()
  commentCode: string

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

  @Exclude()
  imageId: number

  @ApiProperty({ type: ImagesEntity })
  image?: ImagesEntity
  //

  // Constructor Method
  constructor({ image, ...data }: Partial<CommentEntity>) {
    Object.assign(this, data)

    if (image) {
      this.image = new ImagesEntity(image)
    }
  }
  //
}
