// NestJs imports
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core'
import {
  ClassSerializerInterceptor,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common'

// NestJs - Swagger imports
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { NestExpressApplication } from '@nestjs/platform-express'

// Module imports
import { AppModule } from './app.module'

// Global Filters imports
import { PrismaClientExceptionFilter } from './filters/prisma-client-exception/prisma-client-exception.filter'
import { PasswordExceptionFilter } from './filters/exeptions/password-match.exception'
import { UserExistsFilter } from './filters/exeptions/user-exists.exception'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
      // skipUndefinedProperties: true,
      // skipNullProperties: true,
      skipMissingProperties: true,
      // whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      // disableErrorMessages: true,
      errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      // exceptionFactory: {},
      // groups: '',
      // always: true,
      // strictGroups: true,
      // dismissDefaultMessages: true,
      stopAtFirstError: true,
    }),
  )
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  const { httpAdapter } = app.get(HttpAdapterHost)

  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))
  app.useGlobalFilters(new PasswordExceptionFilter(httpAdapter))
  app.useGlobalFilters(new UserExistsFilter(httpAdapter))

  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Ivana Beaumond - Backend')
    .setDescription('Esquema de API do site Ivana Beaumond')
    .setVersion('0.8')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)

  await app.listen(process.env.PORT)
}

bootstrap()
