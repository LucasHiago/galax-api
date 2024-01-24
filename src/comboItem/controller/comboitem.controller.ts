import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ComboItemService } from '../../comboItem/service/comboitem.service';
import { CreateComboItemDto } from '../dto/create-comboitem.dto';
import { UpdateComboItemDto } from '../dto/update-comboitem.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ComboItem } from '../../comboItem/entities/comboitem.entity';

@ApiTags('combo-item')
@Controller('combo-item')
export class ComboItemController {
  constructor(private readonly comboItemService: ComboItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new combo item' })
  @ApiResponse({ status: 201, description: 'The combo item has been successfully created.', type: ComboItem })
  create(@Body() createComboItemDto: CreateComboItemDto) {
    return this.comboItemService.create(createComboItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all combo items' })
  @ApiResponse({ status: 200, description: 'Retrieve a list of combo items.', type: [ComboItem] })
  findAll() {
    return this.comboItemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a combo item by id' })
  @ApiResponse({ status: 200, description: 'Retrieve a combo item by its id.', type: ComboItem })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.comboItemService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a combo item' })
  @ApiResponse({ status: 200, description: 'The combo item has been successfully updated.', type: ComboItem })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateComboItemDto: UpdateComboItemDto) {
    return this.comboItemService.update(id, updateComboItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a combo item' })
  @ApiResponse({ status: 200, description: 'The combo item has been successfully deleted.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.comboItemService.remove(id);
  }
}