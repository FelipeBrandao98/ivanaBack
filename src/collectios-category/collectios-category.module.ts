import { Module } from '@nestjs/common'
import { CollectiosCategoryService } from './collectios-category.service'
import { CollectiosCategoryController } from './collectios-category.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [CollectiosCategoryController],
  providers: [CollectiosCategoryService],
  imports: [PrismaModule],
})
export class CollectiosCategoryModule {}
