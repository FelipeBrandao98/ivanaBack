// NestJs imports
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'

// Services imports
import { CollectionsCategoryService } from '../../collections-category.service'

// Entities imports
import { CollectionsCategoryEntity } from '../../entities/collections-category.entity'

// Interceptors imports
import { EnCollectionsCategoryLanguageInterceptor } from '../../interceptors/english.interceptor'

@ApiTags('Collections Category - Languages')
@UseInterceptors(EnCollectionsCategoryLanguageInterceptor)
@Controller('collections/category')
// Class declaration
export class CollectionsCategoryEnController {
  // Constructor Method
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}
  //

  // Properties
  @Get('en')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async findAll() {
    const collectionCategory = await this.collectiosCategoryService.findAll()

    return new CollectionsCategoryEntity(collectionCategory)
  }

  @Get('en/:collectionCategoryId')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async findOne(
    @Param('collectionCategoryId', ParseIntPipe) collectionCategoryId: number,
  ) {
    const collectionCategory = await this.collectiosCategoryService.findOne(
      collectionCategoryId,
    )

    return new CollectionsCategoryEntity(collectionCategory)
  }
  //
}
