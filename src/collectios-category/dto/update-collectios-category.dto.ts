import { PartialType } from '@nestjs/swagger';
import { CreateCollectiosCategoryDto } from './create-collectios-category.dto';

export class UpdateCollectiosCategoryDto extends PartialType(CreateCollectiosCategoryDto) {}
