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
import { FrCollectionsCategoryLanguageInterceptor } from '../../interceptors/french.interceptor'

@ApiTags('Collections Category - Languages')
@UseInterceptors(FrCollectionsCategoryLanguageInterceptor)
@Controller('collections/category')
// Class declaration
export class CollectionsCategoryFrController {
  // Constructor Method
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}
  //

  @Get('fr')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async findAll() {
    const collectionCategory = await this.collectiosCategoryService.findAll()

    return new CollectionsCategoryEntity(collectionCategory)
  }

  @Get('fr/:collectionCategoryId')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async findOne(
    @Param('collectionCategoryId', ParseIntPipe) collectionCategoryId: number,
  ) {
    const collectionCategory = await this.collectiosCategoryService.findOne(
      collectionCategoryId,
    )

    return new CollectionsCategoryEntity(collectionCategory)
  }
}
