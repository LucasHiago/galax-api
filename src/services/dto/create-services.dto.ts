import { ApiProperty } from '@nestjs/swagger';

export class CreateServicesDto {
  @ApiProperty({ description: 'Nome do serviço' })
  name: string;

  @ApiProperty({ description: 'Descrição detalhada do serviço' })
  description: string;

  @ApiProperty({ description: 'Preço do serviço', example: 19.99 })
  price: number;

  @ApiProperty({ description: 'Quantidade do serviço em estoque', example: 100 })
  stock_quantity: number;
}