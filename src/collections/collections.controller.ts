import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CollectionsService } from './collections.service'
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections')
@ApiTags('Collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionsService.create(createCollectionDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return this.collectionsService.update(+id, updateCollectionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionsService.remove(+id)
  }
}
