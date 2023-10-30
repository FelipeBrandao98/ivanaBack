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
  StreamableFile,
  Header,
  ParseIntPipe,
  UseGuards,
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
import { CreateImageDto } from './dto/create-image.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('images')
@ApiTags('Images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ImagesEntity })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return new ImagesEntity(
      await this.imagesService.create(createImageDto, file),
    )
  }

  @Patch('id/:id')
  @UseGuards(JwtAuthGuard)
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
    updateImageDto.url = `${process.env.SERVER_ADDRESS}/images/${file.filename}`
    return new ImagesEntity(await this.imagesService.update(id, updateImageDto))
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
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
  async getStaticFile(@Param('imgpath') imgpath: string) {
    const file = await this.imagesService.getImage(imgpath)
    return new StreamableFile(file)
  }
}
