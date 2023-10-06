import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { CollectionsCategoryService } from './collections-category.service'
import { CreateCollectionsCategoryDto } from './dto/create-collections-category.dto'
import { UpdateCollectionsCategoryDto } from './dto/update-collections-category.dto'
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { CollectionsCategoryEntity } from './entities/collections-category.entity'

@Controller('collections/category')
@ApiTags('Collections Category')
export class CollectionsCategoryController {
  constructor(
    private readonly collectionsCategoryService: CollectionsCategoryService,
  ) {}

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findAll() {
    return this.collectionsCategoryService.findAll()
  }

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  create(@Body() createCollectionsCategoryDto: CreateCollectionsCategoryDto) {
    return this.collectionsCategoryService.create(createCollectionsCategoryDto)
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionsCategoryDto: UpdateCollectionsCategoryDto,
  ) {
    return this.collectionsCategoryService.update(
      id,
      updateCollectionsCategoryDto,
    )
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsCategoryService.remove(id)
  }
}
