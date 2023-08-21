import { Module } from '@nestjs/common'
import { AvaliationsService } from './avaliations.service'
import { AvaliationsController } from './avaliations.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [AvaliationsController],
  providers: [AvaliationsService],
  imports: [PrismaModule],
})
export class AvaliationsModule {}
