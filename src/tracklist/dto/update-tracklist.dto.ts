import { PartialType } from '@nestjs/swagger';
import { CreateTracklistDto } from './create-tracklist.dto';

export class UpdateTracklistDto extends PartialType(CreateTracklistDto) {}
