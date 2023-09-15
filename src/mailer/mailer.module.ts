import { Module } from '@nestjs/common'
import { MailerService } from './mailer.service'
import { MailerController } from './mailer.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { HttpModule } from '@nestjs/axios'

@Module({
  controllers: [MailerController],
  providers: [MailerService],
  imports: [PrismaModule, HttpModule],
})
export class MailerModule {}
