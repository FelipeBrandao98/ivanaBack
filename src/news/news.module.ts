import { Module } from '@nestjs/common'

import { NewsService } from './news.service'
import { NewsController } from './news.controller'
import { NewsDeController } from './languages/De/news.de.controller'
import { NewsEnController } from './languages/En/news.en.controller'
import { NewsFrController } from './languages/Fr/news.fr.controller'
import { NewsPtBrController } from './languages/Pt-BR/news.pt.controller'

import { PrismaModule } from 'src/prisma/prisma.module'
import { NewscategoryService } from './subroutes/newscategory/newscategory.service'
import { NewscategoryModule } from './subroutes/newscategory/newscategory.module'

@Module({
  controllers: [
    NewsController,
    NewsDeController,
    NewsEnController,
    NewsFrController,
    NewsPtBrController,
  ],
  providers: [NewsService, NewscategoryService],
  imports: [
    PrismaModule,
    // Sub-Routes
    NewscategoryModule,
  ],
})
export class NewsModule {}
