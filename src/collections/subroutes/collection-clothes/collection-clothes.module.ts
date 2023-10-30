import { Module } from '@nestjs/common'
import { CollectionClothesService } from './collection-clothes.service'
import { CollectionClothesController } from './collection-clothes.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { CollectionsClothesDeController } from './languages/De/collections-clothes.de.controller'
import { CollectionsClothesEnController } from './languages/En/collections-clothes.en.controller'
import { CollectionsClothesFrController } from './languages/Fr/collections-clothes.fr.controller'
import { CollectionsClothesPtBrController } from './languages/Pt-BR/collections-clothes.de.controller'

@Module({
  controllers: [
    CollectionClothesController,
    CollectionsClothesDeController,
    CollectionsClothesEnController,
    CollectionsClothesFrController,
    CollectionsClothesPtBrController,
  ],
  providers: [CollectionClothesService],
  imports: [PrismaModule],
})
export class CollectionClothesModule {}
