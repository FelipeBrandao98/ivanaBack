// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from 'src/prisma/prisma.module'

// Controllers imports
import { CommentsController } from './comments.controller'

// Services imports
import { CommentsService } from './comments.service'

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [PrismaModule],
})
// Class declaration
export class CommentsModule {
  // Properties
}
