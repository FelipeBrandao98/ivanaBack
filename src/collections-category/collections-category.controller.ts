import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CollectionsCategoryService } from './collections-category.service'
import { CreateCollectionsCategoryDto } from './dto/create-collections-category.dto'
import { UpdateCollectionsCategoryDto } from './dto/update-collections-category.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections-category')
@ApiTags('Collections Category')
export class CollectionsCategoryController {
  constructor(
    private readonly collectionsCategoryService: CollectionsCategoryService,
  ) {}

  @Post()
  create(@Body() createCollectionsCategoryDto: CreateCollectionsCategoryDto) {
    return this.collectionsCategoryService.create(createCollectionsCategoryDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectionsCategoryDto: UpdateCollectionsCategoryDto,
  ) {
    return this.collectionsCategoryService.update(
      +id,
      updateCollectionsCategoryDto,
    )
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionsCategoryService.remove(+id)
  }
}
