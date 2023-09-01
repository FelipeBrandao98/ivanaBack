import { Controller, Get, Param } from '@nestjs/common'
import { CollectionsService } from 'src/collections/collections.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections')
@ApiTags('Collections')
export class CollectionsDeController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('de')
  findAll() {
    return this.collectionsService.findAll()
  }

  @Get('de/:id')
  findOne(@Param('id') id: string) {
    return this.collectionsService.findOne(+id)
  }
}
