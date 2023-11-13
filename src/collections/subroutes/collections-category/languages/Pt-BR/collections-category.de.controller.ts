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
import { PtBrCollectionsCategoryLanguageInterceptor } from '../../interceptors/brazilian.interceptor'

@ApiTags('Collections Category - Languages')
@UseInterceptors(PtBrCollectionsCategoryLanguageInterceptor)
@Controller('collections/category')
// Class declaration
export class CollectionsCategoryPtBrController {
  // Constructor Method
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}
  //

  // Properties
  @Get('pt-BR')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  async findAll() {
    return new CollectionsCategoryEntity(
      await this.collectiosCategoryService.findAll(),
    )
  }

  @Get('pt-BR/:collectionCategoryId')
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
