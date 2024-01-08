import { Module } from '@nestjs/common'
import { TracklistService } from './tracklist.service'
import { TracklistController } from './tracklist.controller'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [TracklistController],
  providers: [TracklistService],
  imports: [PrismaModule],
})
export class TracklistModule {}
