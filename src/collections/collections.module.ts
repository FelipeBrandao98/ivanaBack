import { Module } from '@nestjs/common'
import { CollectionsService } from './collections.service'
import { CollectionsController } from './collections.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { CollectionsDeController } from './languages/De/collections.de.controller'
import { CollectionsEnController } from './languages/En/collections.en.controller'
import { CollectionsFrController } from './languages/Fr/collections.fr.controller'
import { CollectionsPtBrController } from './languages/Pt-BR/collections.pt.controller'

@Module({
  controllers: [
    CollectionsController,
    CollectionsDeController,
    CollectionsEnController,
    CollectionsFrController,
    CollectionsPtBrController,
  ],
  providers: [CollectionsService],
  imports: [PrismaModule],
})
export class CollectionsModule {}
