import { Module } from '@nestjs/common'
import { NewscategoryService } from './newscategory.service'
import { NewscategoryController } from './newscategory.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [NewscategoryController],
  providers: [NewscategoryService],
  imports: [PrismaModule],
})
export class NewscategoryModule {}
