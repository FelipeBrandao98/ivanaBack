// NestJs imports
import { Injectable, OnModuleInit } from '@nestjs/common'

// Prisma imports
import { PrismaClient } from '@prisma/client'

@Injectable()
// Class declaration
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Properties
  async onModuleInit() {
    await this.$connect()
  }
  //
}
