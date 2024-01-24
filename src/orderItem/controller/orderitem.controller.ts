import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrderItemService } from '../service/orderitem.service';
import { CreateOrderItemDto } from '../dto/create-orderitem.dto';
import { UpdateOrderItemDto } from '../dto/update-orderitem.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrderItem } from '../entities/orderitem.entity';

@ApiTags('order-items')
@Controller('order-items')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order item' })
  @ApiResponse({ status: 201, description: 'The order item has been successfully created.', type: OrderItem })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemService.create(createOrderItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all order items' })
  @ApiResponse({ status: 200, description: 'Retrieve a list of order items.', type: [OrderItem] })
  findAll() {
    return this.orderItemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an order item by id' })
  @ApiResponse({ status: 200, description: 'Retrieve an order item by its id.', type: OrderItem })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderItemService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an order item' })
  @ApiResponse({ status: 200, description: 'The order item has been successfully updated.', type: OrderItem })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemService.update(id, updateOrderItemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order item' })
  @ApiResponse({ status: 200, description: 'The order item has been successfully deleted.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.orderItemService.remove(id);
  }
}