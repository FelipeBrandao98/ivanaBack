import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { CollectionsService } from './collections.service'
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { CollectionEntity } from './entities/collection.entity'

@Controller('collections')
@ApiTags('Collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CollectionEntity })
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionsService.create(createCollectionDto)
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return this.collectionsService.update(id, updateCollectionDto)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.collectionsService.remove(id)
  }
}
