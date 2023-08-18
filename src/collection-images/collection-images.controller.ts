import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CollectionImagesService } from './collection-images.service'
import { CreateCollectionImageDto } from './dto/create-collection-image.dto'
import { UpdateCollectionImageDto } from './dto/update-collection-image.dto'

@Controller('collection-images')
export class CollectionImagesController {
  constructor(
    private readonly collectionImagesService: CollectionImagesService,
  ) {}

  @Post()
  create(@Body() createCollectionImageDto: CreateCollectionImageDto) {
    return this.collectionImagesService.create(createCollectionImageDto)
  }

  @Get()
  findAll() {
    return this.collectionImagesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionImagesService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectionImageDto: UpdateCollectionImageDto,
  ) {
    return this.collectionImagesService.update(+id, updateCollectionImageDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionImagesService.remove(+id)
  }
}
