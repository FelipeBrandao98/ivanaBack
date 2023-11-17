import { ArgumentsHost, Catch, HttpException, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Response } from 'express'
import { UserExists } from './user-exists.filter'

@Catch(UserExists)
export class UserExistsFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>()

    response.status(HttpStatus.UNAUTHORIZED).json({
      statusCode: HttpStatus.UNAUTHORIZED,
      message: 'User alredy exists with this email',
    })
  }
}
