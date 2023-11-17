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
import { PtBrCollectionLanguageInterceptor } from 'src/collections/interceptors/brazilian.interceptor'

@ApiTags('Collections - Languages')
@UseInterceptors(PtBrCollectionLanguageInterceptor)
@Controller('collections')
// Class declaration
export class CollectionsPtBrController {
  // Constructor Method
  constructor(private readonly collectionsService: CollectionsService) {}
  //

  // Properties
  @Get('pt-BR')
  async findAll(): Promise<CollectionEntity[]> {
    const collections = await this.collectionsService.findAll()

    return collections.map((collection) => new CollectionEntity(collection))
  }

  @Get('pt-BR/:collectionId')
  async findOne(
    @Param('collectionId', ParseIntPipe) collectionId: number,
  ): Promise<CollectionEntity> {
    const collection = await this.collectionsService.findOne(collectionId)
    return new CollectionEntity(collection)
  }
}
