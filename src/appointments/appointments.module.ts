import { Module } from '@nestjs/common'
import { AppointmentsService } from './appointments.service'
import { AppointmentsController } from './appointments.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { MailerService } from 'src/mailer/mailer.service'

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService, MailerService],
  imports: [PrismaModule],
})
export class AppointmentsModule {}
