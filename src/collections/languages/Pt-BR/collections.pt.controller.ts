import { Controller, Get, Param } from '@nestjs/common'
import { CollectionsService } from 'src/collections/collections.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections')
@ApiTags('Collections')
export class CollectionsPtBrController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('pt-BR')
  findAll() {
    return this.collectionsService.findAll()
  }

  @Get('pt-BR/:id')
  findOne(@Param('id') id: string) {
    return this.collectionsService.findOne(+id)
  }
}
