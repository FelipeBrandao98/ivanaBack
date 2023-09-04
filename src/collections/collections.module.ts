import { Module } from '@nestjs/common'

import { CollectionsService } from './collections.service'
import { CollectionsController } from './collections.controller'
import { CollectionsDeController } from './languages/De/collections.de.controller'
import { CollectionsEnController } from './languages/En/collections.en.controller'
import { CollectionsFrController } from './languages/Fr/collections.fr.controller'
import { CollectionsPtBrController } from './languages/Pt-BR/collections.pt.controller'

import { PrismaModule } from 'src/prisma/prisma.module'
import { CollectionImagesModule } from './subroutes/collection-images/collection-images.module'
import { CollectionsCategoryModule } from './subroutes/collections-category/collections-category.module'

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
    CollectionImagesModule,
    CollectionsCategoryModule,
  ],
})
export class CollectionsModule {}
