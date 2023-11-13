import { HttpException, HttpStatus } from '@nestjs/common'

export class UserExists extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN)
  }
}
