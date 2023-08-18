import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { PrismaModule } from './prisma/prisma.module'

import { MailerModule } from './mailer/mailer.module'
import { NewsModule } from './news/news.module'
import { ImagesModule } from './images/images.module'
import { NewscategoryModule } from './newscategory/newscategory.module'
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [
    PrismaModule,
    MailerModule,
    NewsModule,
    ImagesModule,
    NewscategoryModule,
    CollectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
