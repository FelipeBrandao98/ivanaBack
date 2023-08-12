import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ImagesService } from './images.service'
import { CreateImageDto } from './dto/create-image.dto'
import { UpdateImageDto } from './dto/update-image.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { ImagesEntity } from './entities/image.entity'

@Controller('images')
@ApiTags('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @ApiCreatedResponse({ type: ImagesEntity })
  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto)
  }

  @Get()
  @ApiOkResponse({ type: ImagesEntity })
  findAll() {
    return this.imagesService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: ImagesEntity })
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id)
  }

  @Patch(':id')
  @ApiOkResponse({ type: ImagesEntity })
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto)
  }

  @Delete(':id')
  @ApiOkResponse({ type: ImagesEntity })
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id)
  }
}
