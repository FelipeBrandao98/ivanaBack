import { PartialType } from '@nestjs/swagger'
import { CreateCollectionsCategoryDto } from './create-collections-category.dto'

export class UpdateCollectionsCategoryDto extends PartialType(
  CreateCollectionsCategoryDto,
) {}
