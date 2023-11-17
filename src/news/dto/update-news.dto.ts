// NestJs imports
import { PartialType } from '@nestjs/swagger'

// Class who is extended imports
import { CreateNewsDto } from './create-news.dto'

// Class declaration
export class UpdateNewsDto extends PartialType(CreateNewsDto) {
  // Properties
}
