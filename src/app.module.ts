// NestJs imports
import { Module } from '@nestjs/common'

// Prisma imports
import { PrismaModule } from './prisma/prisma.module'

// Modules imports
import { MailerModule } from './mailer/mailer.module'
import { NewsModule } from './news/news.module'
import { ImagesModule } from './images/images.module'
import { CollectionsModule } from './collections/collections.module'
import { CommentsModule } from './comments/comments.module'
import { AppointmentsModule } from './appointments/appointments.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    PrismaModule,
    MailerModule,
    NewsModule,
    ImagesModule,
    CollectionsModule,
    CommentsModule,
    AppointmentsModule,
    UsersModule,
    AuthModule,
  ],
})
// Class declaration
export class AppModule {
  // Properties
}
