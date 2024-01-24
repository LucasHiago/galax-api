import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCombosDto } from './create-combos.dto';

export class UpdateCombosDto extends PartialType(CreateCombosDto) {
  @ApiPropertyOptional({ description: 'Nome do combo' })
  name?: string;

  @ApiPropertyOptional({ description: 'Descrição detalhada do combo' })
  description?: string;

  @ApiPropertyOptional({ description: 'Preço do combo', example: 19.99 })
  price?: number;

  @ApiPropertyOptional({ description: 'Quantidade do combo em estoque', example: 100 })
  stock_quantity?: number;
}