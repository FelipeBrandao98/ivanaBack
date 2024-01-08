import { ApiProperty } from '@nestjs/swagger'
import { TrackList } from '@prisma/client'
import { ImagesEntity } from 'src/images/entities/image.entity'

export class TracklistEntity implements TrackList {
  @ApiProperty()
  id: number

  @ApiProperty({ required: true, nullable: false })
  name: string

  @ApiProperty({ required: false, nullable: true })
  isHomeSong: boolean

  @ApiProperty({ required: true, nullable: false })
  audioId: number

  @ApiProperty({ required: true, nullable: false })
  audio: ImagesEntity

  constructor({ audio, ...data }: Partial<TracklistEntity>) {
    Object.assign(this, data)

    if (audio) {
      this.audio = new ImagesEntity(audio)
    }
  }
  coverId: number
}
