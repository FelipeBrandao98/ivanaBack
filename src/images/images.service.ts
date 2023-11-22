// NestJs imports
import { Injectable } from '@nestjs/common'

// DTOs imports
import { CreateImageDto } from './dto/create-image.dto'

// Prisma imports
import { PrismaService } from 'src/prisma/prisma.service'

// AWS imports
import {
  GetObjectCommand,
  GetObjectCommandOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'

// Hash imports
import { randomUUID } from 'crypto'

@Injectable()
// Class declaration
export class ImagesService {
  // Constructor Method
  constructor(private prisma: PrismaService) {}
  //

  // AWS instance
  private readonly s3Client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESSKEY,
    },
  })
  //

  // CRUD Operators - Properties
  async create(createImageDto: CreateImageDto, file: Express.Multer.File) {
    const filename = `${file.originalname.split('.')[0]}-${randomUUID()}`

    try {
      await this.s3Client.send(
        new PutObjectCommand({
          Bucket: process.env.S3_BUCKET,
          Key: filename,
          Body: file.buffer,
          ContentEncoding: 'utf8',
        }),
      )
    } catch (err) {
      throw new Error(err)
    }

    createImageDto.src = filename
    createImageDto.url = `${process.env.SERVER_ADDRESS}/images/${filename}`

    return this.prisma.image.create({ data: createImageDto })
  }

  async getImage(imgName: string) {
    const response: GetObjectCommandOutput = await this.s3Client.send(
      new GetObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: imgName,
      }),
    )

    return response.Body.transformToByteArray()
  }
  //
}
