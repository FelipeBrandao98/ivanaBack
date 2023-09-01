import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CollectionsService } from 'src/collections/collections.service'
import { CreateCollectionDto } from 'src/collections/dto/create-collection.dto'
import { UpdateCollectionDto } from 'src/collections/dto/update-collection.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('collections')
@ApiTags('Collections')
export class CollectionsEnController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get('en')
  findAll() {
    return this.collectionsService.findAll()
  }

  @Get('en/:id')
  findOne(@Param('id') id: string) {
    return this.collectionsService.findOne(+id)
  }
}
