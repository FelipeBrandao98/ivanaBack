import { Module } from '@nestjs/common'
import { MailerService } from './mailer.service'
import { MailerController } from './mailer.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [MailerController],
  providers: [MailerService],
  imports: [PrismaModule],
})
export class MailerModule {}
