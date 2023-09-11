import { Module } from '@nestjs/common'
import { NewscategoryService } from './newscategory.service'
import { NewscategoryController } from './newscategory.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { NewsCategoryDeController } from './languages/De/newsCategory.de.controller'
import { NewsCategoryEnController } from './languages/En/news.en.controller'
import { NewsCategoryFrController } from './languages/Fr/news.fr.controller'
import { NewsCategoryPtBrController } from './languages/Pt-BR/news.pt.controller'

@Module({
  controllers: [
    NewscategoryController,
    NewsCategoryDeController,
    NewsCategoryEnController,
    NewsCategoryFrController,
    NewsCategoryPtBrController,
  ],
  providers: [NewscategoryService],
  imports: [PrismaModule],
})
export class NewscategoryModule {}
