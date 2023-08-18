import { PartialType } from '@nestjs/swagger'
import { CreateCollectionImageDto } from './create-collection-image.dto'

export class UpdateCollectionImageDto extends PartialType(
  CreateCollectionImageDto,
) {}
