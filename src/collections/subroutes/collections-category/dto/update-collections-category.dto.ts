// NestJs - Swagger imports
import { PartialType } from '@nestjs/swagger'

// Class who is extended imports
import { CreateCollectionsCategoryDto } from './create-collections-category.dto'

// Class declaration
export class UpdateCollectionsCategoryDto extends PartialType(
  CreateCollectionsCategoryDto,
) {
  // Properties
}
