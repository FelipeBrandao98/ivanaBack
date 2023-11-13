import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  StreamableFile,
  Header,
  UseGuards,
} from '@nestjs/common'
import { ImagesService } from './images.service'
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
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
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

  @Get(':imgpath')
  @ApiOkResponse({ type: ImagesEntity })
  @Header('Content-Type', 'image/jpeg')
  async getStaticFile(@Param('imgpath') imgpath: string) {
    const file = await this.imagesService.getImage(imgpath)
    return new StreamableFile(file)
  }
}
