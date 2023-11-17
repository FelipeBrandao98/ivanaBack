// NestJs - Swagger imports
import { ApiProperty } from '@nestjs/swagger'

// Entity from prisma imports
import { Mailer } from '@prisma/client'

// Class declaration
export class MailerEntity implements Mailer {
  // Properties
  @ApiProperty({ required: true })
  id: number

  @ApiProperty({ required: true, nullable: true })
  mail: string

  @ApiProperty()
  createdAt: Date
  //

  // Constructor Methods
  constructor({ ...data }: Partial<MailerEntity>) {
    Object.assign(this, data)
  }
  //
}
