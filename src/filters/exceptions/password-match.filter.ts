import { HttpException, HttpStatus } from '@nestjs/common'

export class PasswordException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN)
  }
}
