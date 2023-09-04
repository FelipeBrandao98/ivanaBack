import { Module } from '@nestjs/common'
import { CollectionImagesService } from './collection-images.service'
import { CollectionImagesController } from './collection-images.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [CollectionImagesController],
  providers: [CollectionImagesService],
  imports: [PrismaModule],
})
export class CollectionImagesModule {}
