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
import { CollectionClothesService } from '../../collection-clothes.service'

// Entities imports
import { CollectionClothesEntity } from '../../entities/collection-clothe.entity'

// Interceptors imports
import { DeCollectionsClothesLanguageInterceptor } from '../../interceptors/german.interceptor'

@ApiTags('Collections Clothes - Languages')
@UseInterceptors(DeCollectionsClothesLanguageInterceptor)
@Controller('collections/clothes')
// Class declaration
export class CollectionsClothesDeController {
  // Constructor Methods
  constructor(
    private readonly collectionsClothesService: CollectionClothesService,
  ) {}
  //

  // Properties
  @Get('de')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findAll() {
    const collectionClothes = await this.collectionsClothesService.findAll()

    return new CollectionClothesEntity(collectionClothes)
  }

  @Get('de/:collectionClothesId')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findOne(@Param('collectionClothesId', ParseIntPipe) collectionClothesId: number) {
    const collectionClothes = await this.collectionsClothesService.findOne(collectionClothesId)

    return new CollectionClothesEntity(collectionClothes)
  }
  //
}
