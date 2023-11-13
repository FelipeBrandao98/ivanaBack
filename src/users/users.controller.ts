// NestJs imports
import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Get,
} from '@nestjs/common'

// NestJs - Swagger Imports
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger'

// DTOs imports
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

// Services imports
import { UsersService } from './users.service'

// Entities imports
import { UserEntity } from './entities/user.entity'

// Security imports
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@ApiTags('Users')
@Controller('users')
// Class Declaration
export class UsersController {
  // Constructor Method
  constructor(private readonly usersService: UsersService) {}
  //

  // Properties
  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async findMany() {
    const user = await this.usersService.findMany()

    return new UserEntity(user)
  }

  @Get(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async findOne(@Param('userId') userId: string) {
    const user = await this.usersService.findOne(userId)

    return new UserEntity(user)
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto)

    return new UserEntity(user)
  }

  @Patch(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: UserEntity })
  async update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(userId, updateUserDto)

    return new UserEntity(user)
  }
  //
}
