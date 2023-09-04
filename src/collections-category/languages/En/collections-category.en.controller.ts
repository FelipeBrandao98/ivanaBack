import { Controller, Get, Param, UseInterceptors } from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiTags } from '@nestjs/swagger'
import { EnCollectionsCategoryLanguageInterceptor } from 'src/collections-category/interceptors/english.interceptor'

@Controller('collections-category')
@ApiTags('Collectios Category')
@UseInterceptors(EnCollectionsCategoryLanguageInterceptor)
export class CollectionsCategoryEnController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('en')
  findAll() {
    return this.collectiosCategoryService.findAll()
  }

  @Get('en/:id')
  findOne(@Param('id') id: string) {
    return this.collectiosCategoryService.findOne(+id)
  }
}
