// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Modules imports
import { NewscategoryModule } from './subroutes/newscategory/newscategory.module'

// Controllers imports
import { NewsController } from './news.controller'
import { NewsDeController } from './languages/De/news.de.controller'
import { NewsEnController } from './languages/En/news.en.controller'
import { NewsFrController } from './languages/Fr/news.fr.controller'
import { NewsPtBrController } from './languages/Pt-BR/news.pt.controller'

// Services imports
import { NewscategoryService } from './subroutes/newscategory/newscategory.service'
import { NewsService } from './news.service'

@Module({
  controllers: [
    // Sub-Routes
    NewsDeController,
    NewsEnController,
    NewsFrController,
    NewsPtBrController,
    // Route
    NewsController,
  ],
  providers: [NewsService, NewscategoryService],
  imports: [
    PrismaModule,
    // Sub-Routes
    NewscategoryModule,
  ],
})
// Class declaration
export class NewsModule {
  // Properties
}
