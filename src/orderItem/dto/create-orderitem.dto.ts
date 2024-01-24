import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty({ description: 'ID do pedido' })
  orderId: number;

  @ApiProperty({ description: 'ID do produto', required: false })
  productId?: number;

  @ApiProperty({ description: 'ID do serviço', required: false })
  serviceId?: number;

  @ApiProperty({ description: 'ID do combo', required: false })
  comboItemId?: number;

  @ApiProperty({ description: 'Quantidade' })
  quantity: number;
}