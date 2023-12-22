// NestJs imports
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'

// NestJs - Swagger imports
import { ApiTags } from '@nestjs/swagger'

// Services imports
import { CollectionsService } from 'src/collections/collections.service'

// Entities imports
import { CollectionEntity } from 'src/collections/entities/collection.entity'

// Interceptors imports
import { FrCollectionLanguageInterceptor } from 'src/collections/interceptors/french.interceptor'

@ApiTags('Collections - Languages')
@UseInterceptors(FrCollectionLanguageInterceptor)
@Controller('collections')
// Class declaration
export class CollectionsFrController {
  // Constructor Method
  constructor(private readonly collectionsService: CollectionsService) {}
  //

  // Properties
  @Get('fr')
  async findAll(): Promise<CollectionEntity[]> {
    const collections = await this.collectionsService.findAll()

    return collections.map((collection) => new CollectionEntity(collection))
  }

  @Get('fr/:collectionId')
  async findOne(
    @Param('collectionId', ParseIntPipe) collectionId: number,
  ): Promise<CollectionEntity> {
    const collection = await this.collectionsService.findOne(collectionId)

    return new CollectionEntity(collection)
  }

  @Get('fr/category/:categoryId')
  async findById(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<CollectionEntity[]> {
    const collections = await this.collectionsService.findByCategoryId(
      categoryId,
    )

    return collections.map((collection) => new CollectionEntity(collection))
  }
  //
}
