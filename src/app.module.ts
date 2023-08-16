import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { PrismaModule } from './prisma/prisma.module'

import { MailerModule } from './mailer/mailer.module'
import { NewsModule } from './news/news.module'
import { ImagesModule } from './images/images.module'
import { NewscategoryModule } from './newscategory/newscategory.module'

@Module({
  imports: [
    PrismaModule,
    MailerModule,
    NewsModule,
    ImagesModule,
    NewscategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
