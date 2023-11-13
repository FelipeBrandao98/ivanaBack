import { Module } from '@nestjs/common'

import { PrismaModule } from 'src/prisma/prisma.module'

import { ImagesController } from './images.controller'

import { ImagesService } from './images.service'

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [PrismaModule],
})
export class ImagesModule {}
