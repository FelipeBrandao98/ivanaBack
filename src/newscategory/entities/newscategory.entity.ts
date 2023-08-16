import { ApiProperty } from '@nestjs/swagger'
import { NewsCategory } from '@prisma/client'

export class NewscategoryEntity implements NewsCategory {
  constructor(partial: Partial<NewscategoryEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: number

  @ApiProperty()
  description: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
