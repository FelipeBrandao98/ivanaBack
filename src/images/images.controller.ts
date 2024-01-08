// NestJs imports
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

// NestJs - Swagger imports
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

// DTOs imports
import { CreateImageDto } from './dto/create-image.dto'

// Services imports
import { ImagesService } from './images.service'

// Entities imports
import { ImagesEntity } from './entities/image.entity'

// Security imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

// Interceptors imports
import { FileInterceptor } from '@nestjs/platform-express'

@ApiTags('Images / Audios')
@Controller('images')
// Class declaration
export class ImagesController {
  // Constructor Method
  constructor(private readonly imagesService: ImagesService) {}
  //

  // Properties
  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: ImagesEntity })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ImagesEntity> {
    const image = await this.imagesService.create(createImageDto, file)

    return new ImagesEntity(image)
  }

  @Post('audio')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: ImagesEntity })
  @UseInterceptors(FileInterceptor('file'))
  async createAudio(
    @Body() createImageDto: CreateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ImagesEntity> {
    const image = await this.imagesService.create(createImageDto, file)

    return new ImagesEntity(image)
  }

  @Get(':imgpath')
  @ApiOkResponse({ type: ImagesEntity })
  @Header('Content-Type', 'image/jpeg')
  async getStaticFile(
    @Param('imgpath') imgpath: string,
  ): Promise<StreamableFile> {
    const file = await this.imagesService.getImage(imgpath)

    return new StreamableFile(file)
  }

  @Get('audio/:audioPath')
  @ApiOkResponse({ type: ImagesEntity })
  @Header('Content-Type', 'audio/mpeg')
  async getStaticAudio(
    @Param('audioPath') audioPath: string,
  ): Promise<StreamableFile> {
    const file = await this.imagesService.getImage(audioPath)

    return new StreamableFile(file)
  }
  //
}
