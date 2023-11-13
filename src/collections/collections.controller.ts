// NestJs imports
import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  UseGuards,
} from '@nestjs/common'

// NestJs - Swagger imports
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

// DTOs imports
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'

// Services imports
import { CollectionsService } from './collections.service'

// Entities imports
import { CollectionEntity } from './entities/collection.entity'

// Security imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Collections')
@Controller('collections')
// Class declaration
export class CollectionsController {
  // Constructor Method
  constructor(private readonly collectionsService: CollectionsService) {}
  //

  // Properties
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionEntity })
  async findAll() {
    const collection = await this.collectionsService.findAll()

    return new CollectionEntity(collection)
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: CollectionEntity })
  async create(@Body() createCollectionDto: CreateCollectionDto) {
    const collection = await this.collectionsService.create(createCollectionDto)

    return new CollectionEntity(collection)
  }

  @Patch(':collectionId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionEntity })
  async update(
    @Param('collectionId', ParseIntPipe) collectionId: number,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    const collection = await this.collectionsService.update(
      collectionId,
      updateCollectionDto,
    )
    return new CollectionEntity(collection)
  }

  @Delete(':collectionId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: CollectionEntity })
  async remove(@Param('collectionId', ParseIntPipe) collectionId: number) {
    const collection = await this.collectionsService.remove(collectionId)
    return new CollectionEntity(collection)
  }
  //
}
