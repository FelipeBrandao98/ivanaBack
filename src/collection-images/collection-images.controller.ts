import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common'
import { CollectionImagesService } from './collection-images.service'
import { CollectionImagesEntity } from './entities/collection-image.entity'
import { CreateCollectionImageDto } from './dto/create-collection-image.dto'
import { UpdateCollectionImageDto } from './dto/update-collection-image.dto'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('collection-images')
export class CollectionImagesController {
  constructor(
    private readonly collectionImagesService: CollectionImagesService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads/collections/images',
      preservePath: true,
    }),
  )
  async create(
    @Body() createCollectionImageDto: CreateCollectionImageDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        .addMaxSizeValidator({
          maxSize: 1000000000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    createCollectionImageDto.src = file.filename
    createCollectionImageDto.url = `http://localhost:3001/collection-images/${file.filename}`
    return new CollectionImagesEntity(
      await this.collectionImagesService.create(createCollectionImageDto),
    )
  }

  @Get()
  findAll() {
    return this.collectionImagesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new CollectionImagesEntity(
      await this.collectionImagesService.findOne(+id),
    )
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectionImageDto: UpdateCollectionImageDto,
  ) {
    return this.collectionImagesService.update(+id, updateCollectionImageDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new CollectionImagesEntity(
      await this.collectionImagesService.remove(+id),
    )
  }
}
