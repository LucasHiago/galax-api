import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Nome do produto' })
  name: string;

  @ApiProperty({ description: 'Descrição detalhada do produto' })
  description: string;

  @ApiProperty({ description: 'Preço do produto', example: 19.99 })
  price: number;

  @ApiProperty({ description: 'Quantidade do produto em estoque', example: 100 })
  stock_quantity: number;
}