import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsService } from 'src/collections/collections.service'
import { ApiTags } from '@nestjs/swagger'
import { DeCollectionLanguageInterceptor } from 'src/collections/interceptors/german.interceptor'

@Controller('collections')
@ApiTags('Collections')
@UseInterceptors(DeCollectionLanguageInterceptor)
export class CollectionsDeController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('de')
  findAll() {
    return this.collectionsService.findAll()
  }

  @Get('de/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsService.findOne(id)
  }
}
