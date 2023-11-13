// NestJs - Swagger imports
import { PartialType } from '@nestjs/swagger'

// Class who is extended imports
import { CreateCollectionDto } from './create-collection.dto'

// class declaration
export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {
  // Properties
}
