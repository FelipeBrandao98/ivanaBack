import { PartialType } from '@nestjs/swagger';
import { CreateCollectionClotheDto } from './create-collection-clothe.dto';

export class UpdateCollectionClotheDto extends PartialType(CreateCollectionClotheDto) {}
