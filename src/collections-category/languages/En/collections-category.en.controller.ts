import { Controller, Get, Param } from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections-category')
@ApiTags('Collectios Category')
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
