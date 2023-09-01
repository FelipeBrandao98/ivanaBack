import { Module } from '@nestjs/common'
import { CollectionsCategoryService } from './collections-category.service'
import { CollectionsCategoryController } from './collections-category.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { CollectionsCategoryDeController } from './languages/De/collections-category.de.controller'
import { CollectionsCategoryEnController } from './languages/En/collections-category.en.controller'
import { CollectionsCategoryFrController } from './languages/Fr/collections-category.fr.controller'
import { CollectionsCategoryPtBrController } from './languages/Pt-BR/collections-category.de.controller'

@Module({
  controllers: [
    CollectionsCategoryController,
    CollectionsCategoryDeController,
    CollectionsCategoryEnController,
    CollectionsCategoryFrController,
    CollectionsCategoryPtBrController,
  ],
  providers: [CollectionsCategoryService],
  imports: [PrismaModule],
})
export class CollectionsCategoryModule {}
