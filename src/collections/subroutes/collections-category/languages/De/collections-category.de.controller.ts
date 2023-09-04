import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { DeCollectionsCategoryLanguageInterceptor } from '../../interceptors/german.interceptor'
import { CollectionsCategoryEntity } from '../../entities/collections-category.entity'

@Controller('collections/category')
@ApiTags('Collections Category')
@UseInterceptors(DeCollectionsCategoryLanguageInterceptor)
export class CollectionsCategoryDeController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('de')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findAll() {
    const response = this.collectiosCategoryService.findAll()
    return response
  }

  @Get('de/:id')
  @ApiOkResponse({ type: CollectionsCategoryEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectiosCategoryService.findOne(id)
  }
}
