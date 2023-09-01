import { ApiProperty } from '@nestjs/swagger'
import { NewsCategory } from '@prisma/client'

export class NewscategoryEntity implements NewsCategory {
  constructor(partial: Partial<NewscategoryEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: number

  @ApiProperty({ required: true })
  description: string

  @ApiProperty({ required: false })
  descriptionDe: string | null

  @ApiProperty({ required: false })
  descriptionEn: string | null

  @ApiProperty({ required: false })
  descriptionFr: string | null

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
