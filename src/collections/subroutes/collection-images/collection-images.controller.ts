import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
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
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'

@Controller('collections/images')
@ApiTags('Collection Images')
export class CollectionImagesController {
  imagesService: any
  constructor(
    private readonly collectionImagesService: CollectionImagesService,
  ) {}

  @Post(':collectionId')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionImagesEntity })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createCollectionImageDto: CreateCollectionImageDto,
    @UploadedFile()
    file: Express.Multer.File,
    @Param('collectionId', ParseIntPipe) collectionId: number,
  ) {
    createCollectionImageDto.collectionId = Number(collectionId)
    return new CollectionImagesEntity(
      await this.collectionImagesService.create(createCollectionImageDto, file),
    )
  }

  @Get()
  @ApiOkResponse({ type: CollectionImagesEntity })
  async findAll() {
    const collectionImages = await this.collectionImagesService.findAll()
    return collectionImages.map(
      (collectionImage) => new CollectionImagesEntity(collectionImage),
    )
  }

  @Get(':imgpath')
  @ApiOkResponse({ type: CollectionImagesEntity })
  @Header('Content-Type', 'image/jpeg')
  async getStaticFile(@Param('imgpath') imgpath: string) {
    const file = await this.collectionImagesService.getImage(imgpath)
    return new StreamableFile(file)
  }

  @Get('id/:id')
  @ApiOkResponse({ type: CollectionImagesEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new CollectionImagesEntity(
      await this.collectionImagesService.findOne(id),
    )
  }

  @Get('collection-id/:id')
  @ApiOkResponse({ type: CollectionImagesEntity })
  async findByCollectionId(@Param('id', ParseIntPipe) id: number) {
    const images = await this.collectionImagesService.findByCollectionId(id)

    return images.map((image) => new CollectionImagesEntity(image))
  }

  @Patch('id/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionImagesEntity })
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads/collections/images',
      preservePath: true,
    }),
  )
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionImageDto: UpdateCollectionImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    updateCollectionImageDto.src = file.filename
    updateCollectionImageDto.url = `${process.env.SERVER_ADDRESS}/collections/images/${file.filename}`
    return new CollectionImagesEntity(
      await this.collectionImagesService.update(
        id,
        updateCollectionImageDto,
        file,
      ),
    )
  }

  @Patch('up/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionImagesEntity })
  updateProps(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionImageDto: UpdateCollectionImageDto,
  ) {
    return this.collectionImagesService.update(id, updateCollectionImageDto)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CollectionImagesEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new CollectionImagesEntity(
      await this.collectionImagesService.remove(id),
    )
  }
}
