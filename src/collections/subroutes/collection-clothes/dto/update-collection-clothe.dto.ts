// NestJs - Swagger imports
import { PartialType } from '@nestjs/swagger'

// Class who is extended imports
import { CreateCollectionClotheDto } from './create-collection-clothe.dto'

// Class declaration
export class UpdateCollectionClotheDto extends PartialType(
  CreateCollectionClotheDto,
) {
  // Properties
}
