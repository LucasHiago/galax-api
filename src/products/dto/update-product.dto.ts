import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({ description: 'Nome do produto' })
  name?: string;

  @ApiPropertyOptional({ description: 'Descrição detalhada do produto' })
  description?: string;

  @ApiPropertyOptional({ description: 'Preço do produto', example: 19.99 })
  price?: number;

  @ApiPropertyOptional({ description: 'Quantidade do produto em estoque', example: 100 })
  stock_quantity?: number;
}