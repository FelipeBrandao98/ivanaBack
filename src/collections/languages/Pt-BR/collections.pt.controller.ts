import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsService } from 'src/collections/collections.service'
import { ApiTags } from '@nestjs/swagger'
import { PtBrCollectionLanguageInterceptor } from 'src/collections/interceptors/brazilian.interceptor'

@Controller('collections')
@ApiTags('Collections - Languages')
@UseInterceptors(PtBrCollectionLanguageInterceptor)
export class CollectionsPtBrController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('pt-BR')
  findAll() {
    return this.collectionsService.findAll()
  }

  @Get('pt-BR/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsService.findOne(id)
  }
}
