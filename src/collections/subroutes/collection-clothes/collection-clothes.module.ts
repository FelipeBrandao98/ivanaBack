// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controllers imports
import { CollectionClothesController } from './collection-clothes.controller'
import { CollectionsClothesDeController } from './languages/De/collections-clothes.de.controller'
import { CollectionsClothesEnController } from './languages/En/collections-clothes.en.controller'
import { CollectionsClothesFrController } from './languages/Fr/collections-clothes.fr.controller'
import { CollectionsClothesPtBrController } from './languages/Pt-BR/collections-clothes.de.controller'

// Services imports
import { CollectionClothesService } from './collection-clothes.service'

@Module({
  controllers: [
    CollectionsClothesDeController,
    CollectionsClothesEnController,
    CollectionsClothesFrController,
    CollectionsClothesPtBrController,
    CollectionClothesController,
  ],
  providers: [CollectionClothesService],
  imports: [PrismaModule],
})
// Class declaration
export class CollectionClothesModule {
  // Properties
}
