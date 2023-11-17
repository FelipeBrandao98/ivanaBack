// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controllers imports
import { MailerController } from './mailer.controller'

// Services imports
import { MailerService } from './mailer.service'

// Module from call external api
import { HttpModule } from '@nestjs/axios'

@Module({
  controllers: [MailerController],
  providers: [MailerService],
  imports: [PrismaModule, HttpModule],
})
// Class declaration
export class MailerModule {
  // Properties
}
