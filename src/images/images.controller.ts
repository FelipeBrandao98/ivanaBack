import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
  StreamableFile,
  Header,
  ParseIntPipe,
} from '@nestjs/common'
import { ImagesService } from './images.service'
import { UpdateImageDto } from './dto/update-image.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'
import { ImagesEntity } from './entities/image.entity'
import { FileInterceptor } from '@nestjs/platform-express'
import { createReadStream } from 'fs'
import { join } from 'path'
import { CreateImageDto } from './dto/create-image.dto'

@Controller('images')
@ApiTags('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ImagesEntity })
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
      preservePath: true,
    }),
  )
  async create(
    @Body() createImageDto: CreateImageDto,
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
    console.log(file)
    createImageDto.src = file.filename
    createImageDto.url = `http://localhost:3001/images/${file.filename}`
    return new ImagesEntity(await this.imagesService.create(createImageDto))
  }

  @Patch('id/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: ImagesEntity })
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
      preservePath: true,
    }),
  )
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateImageDto: UpdateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    updateImageDto.src = file.filename
    updateImageDto.url = `http://localhost:3001/images/${file.filename}`
    return new ImagesEntity(await this.imagesService.update(id, updateImageDto))
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: ImagesEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ImagesEntity(await this.imagesService.remove(id))
  }

  @Get('id/:id')
  @ApiOkResponse({ type: ImagesEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new ImagesEntity(await this.imagesService.findOne(id))
  }

  @Get(':imgpath')
  @ApiOkResponse({ type: ImagesEntity })
  @Header('Content-Type', 'image/jpeg')
  getStaticFile(@Param('imgpath') imgpath: string): StreamableFile {
    const file = createReadStream(join(process.cwd(), `./uploads/${imgpath}`))
    return new StreamableFile(file)
  }
}
