// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaService } from './prisma.service'

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
// Class declaration
export class PrismaModule {
  // Properties
}
