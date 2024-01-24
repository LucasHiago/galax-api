import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { servicesService } from '../service/services.service';
import { CreateServicesDto } from '../dto/create-services.dto';
import { UpdateServicesDto } from '../dto/update-services.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: servicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new service' })
  @ApiResponse({ status: 201, type: CreateServicesDto })
  create(@Body() createServicesDto: CreateServicesDto) {
    return this.servicesService.create(createServicesDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all services' })
  @ApiResponse({ status: 200, type: [CreateServicesDto] })
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a service by id' })
  @ApiResponse({ status: 200, type: CreateServicesDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a service' })
  @ApiResponse({ status: 200, type: UpdateServicesDto })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateServicesDto: UpdateServicesDto) {
    return this.servicesService.update(id, updateServicesDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a service' })
  @ApiResponse({ status: 200, type: Number })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.remove(id);
  }
}