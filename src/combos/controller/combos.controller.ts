import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CombosService } from '../service/services.service';
import { CreateCombosDto } from '../dto/create-combos.dto';
import { UpdateCombosDto } from '../dto/update-combos.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('combos')
@Controller('combos')
export class CombosController {
  constructor(private readonly combosService: CombosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new combo' })
  @ApiResponse({ status: 201, type: CreateCombosDto })
  create(@Body() createCombosDto: CreateCombosDto) {
    return this.combosService.create(createCombosDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all combos' })
  @ApiResponse({ status: 200, type: [CreateCombosDto] })
  findAll() {
    return this.combosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a combo by id' })
  @ApiResponse({ status: 200, type: CreateCombosDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.combosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a combo' })
  @ApiResponse({ status: 200, type: CreateCombosDto })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCombosDto: UpdateCombosDto) {
    return this.combosService.update(id, updateCombosDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a combo' })
  @ApiResponse({ status: 200, type: Number })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.combosService.remove(id);
  }
}