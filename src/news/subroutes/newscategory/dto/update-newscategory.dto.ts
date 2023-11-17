// NestJs - Swagger imports
import { PartialType } from '@nestjs/swagger'

// Class who is extended imports
import { CreateNewscategoryDto } from './create-newscategory.dto'

// Class declaration
export class UpdateNewscategoryDto extends PartialType(CreateNewscategoryDto) {
  // Properties
}
