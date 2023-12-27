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
import { EnCollectionsClothesLanguageInterceptor } from '../../interceptors/english.interceptor'

@ApiTags('Collections Clothes - Languages')
@UseInterceptors(EnCollectionsClothesLanguageInterceptor)
@Controller('collections/clothes')
// Class declaration
export class CollectionsClothesEnController {
  // Constructor Methods
  constructor(
    private readonly collectionsClothesService: CollectionClothesService,
  ) {}
  //

  // Properties
  @Get('en/:collectionId')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findAll(@Param('collectionId', ParseIntPipe) collectionId: number) {
    const collectionsClothes = await this.collectionsClothesService.findAll(
      collectionId,
    )

    return collectionsClothes.map(
      (collectionClothes) => new CollectionClothesEntity(collectionClothes),
    )
  }

  @Get('en/:collectionClothesId')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findOne(
    @Param('collectionClothesId', ParseIntPipe) collectionClothesId: number,
  ) {
    const collectionClothes = await this.collectionsClothesService.findOne(
      collectionClothesId,
    )

    return new CollectionClothesEntity(collectionClothes)
  }

  @Get('en/product/:collectionClothesId')
  @ApiOkResponse({ type: CollectionClothesEntity })
  async findProducts(
    @Param('collectionClothesId', ParseIntPipe) collectionClothesId: number,
  ) {
    const collectionsClothes =
      await this.collectionsClothesService.findProducts(collectionClothesId)

    return collectionsClothes.map(
      (collectionClothes) => new CollectionClothesEntity(collectionClothes),
    )
  }
  //
}
