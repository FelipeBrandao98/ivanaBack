// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controllers imports
import { NewscategoryController } from './newscategory.controller'
import { NewsCategoryDeController } from './languages/De/newsCategory.de.controller'
import { NewsCategoryEnController } from './languages/En/news.en.controller'
import { NewsCategoryFrController } from './languages/Fr/news.fr.controller'
import { NewsCategoryPtBrController } from './languages/Pt-BR/news.pt.controller'

// Services imports
import { NewscategoryService } from './newscategory.service'

@Module({
  controllers: [
    // Sub-Routes
    NewsCategoryDeController,
    NewsCategoryEnController,
    NewsCategoryFrController,
    NewsCategoryPtBrController,
    // Routes
    NewscategoryController,
  ],
  providers: [NewscategoryService],
  imports: [PrismaModule],
})
// Class declaration
export class NewscategoryModule {
  // Properties
}
