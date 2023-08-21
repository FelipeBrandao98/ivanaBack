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
  StreamableFile,
  Header,
  ParseIntPipe,
} from '@nestjs/common'
import { CollectionImagesService } from './collection-images.service'
import { CollectionImagesEntity } from './entities/collection-image.entity'
import { CreateCollectionImageDto } from './dto/create-collection-image.dto'
import { UpdateCollectionImageDto } from './dto/update-collection-image.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { createReadStream } from 'fs'
import { join } from 'path'
import { ApiTags } from '@nestjs/swagger'

@Controller('collection-images')
@ApiTags('Collection Images')
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
  async findAll() {
    const collectionImages = await this.collectionImagesService.findAll()
    return collectionImages.map(
      (collectionImage) => new CollectionImagesEntity(collectionImage),
    )
  }

  @Get(':imgpath')
  @Header('Content-Type', 'image/jpeg')
  getStaticFile(@Param('imgpath') imgpath: string): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), `./uploads/collections/images/${imgpath}`),
    )
    return new StreamableFile(file)
  }

  @Get('id/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new CollectionImagesEntity(
      await this.collectionImagesService.findOne(id),
    )
  }

  @Get('collection-id/:id')
  async findByCollectionId(@Param('id', ParseIntPipe) id: number) {
    const images = await this.collectionImagesService.findByCollectionId(id)

    return images.map((image) => new CollectionImagesEntity(image))
  }

  @Patch('id/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads/collections/images',
      preservePath: true,
    }),
  )
  async update(
    @Param('id') id: string,
    @Body() updateCollectionImageDto: UpdateCollectionImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    updateCollectionImageDto.src = file.filename
    updateCollectionImageDto.url = `http://localhost:3001/collection-images/${file.filename}`
    return new CollectionImagesEntity(
      await this.collectionImagesService.update(+id, updateCollectionImageDto),
    )
  }

  @Patch('up/:id')
  updateProps(
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
