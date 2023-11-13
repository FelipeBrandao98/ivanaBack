// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controllers imports
import { CollectionsCategoryController } from './collections-category.controller'
import { CollectionsCategoryDeController } from './languages/De/collections-category.de.controller'
import { CollectionsCategoryEnController } from './languages/En/collections-category.en.controller'
import { CollectionsCategoryFrController } from './languages/Fr/collections-category.fr.controller'
import { CollectionsCategoryPtBrController } from './languages/Pt-BR/collections-category.de.controller'

// Services imports
import { CollectionsCategoryService } from './collections-category.service'

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
// Class declaration
export class CollectionsCategoryModule {
  // Properties
}
