// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Module imports
import { CollectionClothesModule } from './subroutes/collection-clothes/collection-clothes.module'
import { CollectionsCategoryModule } from './subroutes/collections-category/collections-category.module'

// Controllers imports
import { CollectionsController } from './collections.controller'
import { CollectionsDeController } from './languages/De/collections.de.controller'
import { CollectionsEnController } from './languages/En/collections.en.controller'
import { CollectionsFrController } from './languages/Fr/collections.fr.controller'
import { CollectionsPtBrController } from './languages/Pt-BR/collections.pt.controller'

// Services imports
import { CollectionsService } from './collections.service'

@Module({
  controllers: [
    CollectionsController,
    CollectionsDeController,
    CollectionsEnController,
    CollectionsFrController,
    CollectionsPtBrController,
  ],
  providers: [CollectionsService],
  imports: [
    PrismaModule,
    // Sub-Routes
    CollectionsCategoryModule,
    CollectionClothesModule,
  ],
})
// Class declaration
export class CollectionsModule {
  // Properties
}
