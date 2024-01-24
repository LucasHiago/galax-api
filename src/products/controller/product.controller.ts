import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, type: CreateProductDto })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [CreateProductDto] })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by id' })
  @ApiResponse({ status: 200, type: CreateProductDto })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({ status: 200, type: UpdateProductDto })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({ status: 200, type: Number })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}