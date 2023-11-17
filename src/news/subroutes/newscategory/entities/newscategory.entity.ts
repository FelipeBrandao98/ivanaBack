// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma import
import { NewsCategory } from '@prisma/client'

// Class declaration
export class NewscategoryEntity implements NewsCategory {
  // Properties
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
  //

  // Constructor Methods
  constructor(partial: Partial<NewscategoryEntity>) {
    Object.assign(this, partial)
  }
  //
}
