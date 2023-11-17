// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controllers imports
import { ImagesController } from './images.controller'

// Services imports
import { ImagesService } from './images.service'

@Module({
  controllers: [ImagesController],
  providers: [ImagesService],
  imports: [PrismaModule],
})
// Class declaration
export class ImagesModule {
  // Properties
}
