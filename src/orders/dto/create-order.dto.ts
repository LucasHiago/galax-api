import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../dto/order.enum';

export class CreateOrderDto {
  @ApiProperty({ description: 'ID do usuário', required: false })
  userId?: number;

  @ApiProperty({ description: 'Preço total' })
  total_price: number;

  @ApiProperty({ description: 'Status do pedido', enum: OrderStatus })
  status: OrderStatus;
}