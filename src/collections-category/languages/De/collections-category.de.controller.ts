import { Controller, Get, Param } from '@nestjs/common'
import { CollectionsCategoryService } from '../../collections-category.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections-category')
@ApiTags('Collectios Category')
export class CollectionsCategoryDeController {
  constructor(
    private readonly collectiosCategoryService: CollectionsCategoryService,
  ) {}

  @Get('de')
  findAll() {
    const response = this.collectiosCategoryService.findAll()
    return response
  }

  @Get('de/:id')
  findOne(@Param('id') id: string) {
    return this.collectiosCategoryService.findOne(+id)
  }
}
