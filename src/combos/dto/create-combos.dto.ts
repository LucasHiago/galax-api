import { ApiProperty } from '@nestjs/swagger';

export class CreateCombosDto {
  @ApiProperty({ description: 'Nome do combo' })
  name: string;

  @ApiProperty({ description: 'Descrição detalhada do combo' })
  description: string;

  @ApiProperty({ description: 'Preço do combo', example: 19.99 })
  price: number;

  @ApiProperty({ description: 'Quantidade do combo em estoque', example: 100 })
  stock_quantity: number;
}