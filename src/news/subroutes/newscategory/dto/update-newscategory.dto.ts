import { PartialType } from '@nestjs/swagger';
import { CreateNewscategoryDto } from './create-newscategory.dto';

export class UpdateNewscategoryDto extends PartialType(CreateNewscategoryDto) {}
