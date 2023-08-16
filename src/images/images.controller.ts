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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { ImagesEntity } from './entities/image.entity'
import { FileInterceptor } from '@nestjs/platform-express'
import { createReadStream } from 'fs'
import { join } from 'path'

@Controller('images')
@ApiTags('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @ApiCreatedResponse({ type: ImagesEntity })
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
      preservePath: true,
    }),
  )
  create(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        .addMaxSizeValidator({
          maxSize: 1000000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    return this.imagesService.create({
      src: file.filename,
    })
  }

  @Get('id?=:id')
  @ApiOkResponse({ type: ImagesEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.imagesService.findOne(id)
  }

  @Get(':imgpath')
  @Header('Content-Type', 'image/jpeg')
  getStaticFile(@Param('imgpath') imgpath: string): StreamableFile {
    const file = createReadStream(join(process.cwd(), `./uploads/${imgpath}`))
    return new StreamableFile(file)
  }

  @Patch(':id')
  @ApiOkResponse({ type: ImagesEntity })
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
      preservePath: true,
    }),
  )
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateImageDto: UpdateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    updateImageDto.src = file.filename
    return this.imagesService.update(id, {
      src: file.filename,
    })
  }

  @Delete(':id')
  @ApiOkResponse({ type: ImagesEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.imagesService.remove(id)
  }
}
