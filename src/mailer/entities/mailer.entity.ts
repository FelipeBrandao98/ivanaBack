import { ApiProperty } from '@nestjs/swagger'
import { Mailer } from '@prisma/client'

export class MailerEntity implements Mailer {
  @ApiProperty()
  id: number

  @ApiProperty({ required: true, nullable: true })
  mail: string

  @ApiProperty()
  createdAt: Date
}
