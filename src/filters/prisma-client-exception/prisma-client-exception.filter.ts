import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Prisma } from '@prisma/client'
import { Response } from 'express'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>()

    switch (exception.code) {
      case 'P2002': {
        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message:
            'The field that you trying to update/create is already in use',
          error: exception.meta,
          code: exception.code,
        })

        break
      }

      case 'P2025': {
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'The content that you are trying to get does not exist',
          error: exception.meta,
          code: exception.code,
        })

        break
      }

      default: {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error',
          error: exception.meta,
          code: exception.code,
        })

        break
      }
    }

    exception.name !== 'PrismaClientKnownRequestError' &&
      console.error(exception.name)
    console.error(exception.message)
  }
}
