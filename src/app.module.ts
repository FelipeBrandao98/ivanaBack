import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { PrismaModule } from './prisma/prisma.module'

import { MailerModule } from './mailer/mailer.module'
import { NewsModule } from './news/news.module'
import { ImagesModule } from './images/images.module'
import { CollectionsModule } from './collections/collections.module'
import { CommentsModule } from './comments/comments.module'
import { AppointmentsModule } from './appointments/appointments.module'

@Module({
  imports: [
    PrismaModule,
    MailerModule,
    NewsModule,
    ImagesModule,
    CollectionsModule,
    CommentsModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
