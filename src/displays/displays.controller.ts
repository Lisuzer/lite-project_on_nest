import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { CreateDisplayDto } from './dto/create-display.dto';
import { UpdateDisplayDto } from './dto/update-display.dto';
import { DisplaysService } from './displays.service';
import { Display } from './schemas/display.schema';
import { ApiTags } from '@nestjs/swagger';
import { ParseObjectIdPipe } from 'src/common/objectid.pipe';

@ApiTags('displays')
@Controller('displays')
export class DisplaysController {
  constructor(private readonly displaysService: DisplaysService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Display[]> {
    return this.displaysService.getAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string): Promise<Display> {
    return this.displaysService.getOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDisplayDto: CreateDisplayDto): Promise<Display> {
    return this.displaysService.create(createDisplayDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string): Promise<Display> {
    return this.displaysService.remove(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateDisplayDto: UpdateDisplayDto,
  ): Promise<Display> {
    return this.displaysService.update(id, updateDisplayDto);
  }
}
