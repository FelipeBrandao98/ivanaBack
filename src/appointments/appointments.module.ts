// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controller imports
import { AppointmentsController } from './appointments.controller'

// Services imports
import { AppointmentsService } from './appointments.service'
import { MailerService } from 'src/mailer/mailer.service'

// Module from call external api
import { HttpModule } from '@nestjs/axios'

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService, MailerService],
  imports: [PrismaModule, HttpModule],
})
// Class declaration
export class AppointmentsModule {
  // Properties
}
