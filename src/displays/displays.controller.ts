import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { CreateDisplayDto } from './dto/create-display.dto';
import { UpdateDisplayDto } from './dto/update-display.dto';
import { DisplaysService } from './displays.service';
import { Display } from './schemas/display.schema';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ParseObjectIdPipe } from 'src/common/objectid.pipe';

@ApiTags('displays')
@Controller('displays')
export class DisplaysController {
  constructor(private readonly displaysService: DisplaysService) {}

  @Get()
  @ApiOkResponse({ description: 'Displays have been found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  getAll(): Promise<Display[]> {
    return this.displaysService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Display have been found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  getOne(@Param('id') id: string): Promise<Display> {
    return this.displaysService.getOne(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Display has been successfully created.',
    type: Display,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  create(@Body() createDisplayDto: CreateDisplayDto): Promise<Display> {
    return this.displaysService.create(createDisplayDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Display have been deleted' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  remove(@Param('id') id: string): Promise<Display> {
    return this.displaysService.remove(id);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Display have been updated' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateDisplayDto: UpdateDisplayDto,
  ): Promise<Display> {
    return this.displaysService.update(id, updateDisplayDto);
  }
}
