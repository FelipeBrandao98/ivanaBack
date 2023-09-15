import { Module } from '@nestjs/common'
import { AppointmentsService } from './appointments.service'
import { AppointmentsController } from './appointments.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { MailerService } from 'src/mailer/mailer.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService, MailerService],
  imports: [PrismaModule, HttpModule],
})
export class AppointmentsModule {}
