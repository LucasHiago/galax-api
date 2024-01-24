import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateServicesDto } from './create-services.dto';

export class UpdateServicesDto extends PartialType(CreateServicesDto) {
  @ApiPropertyOptional({ description: 'Nome do serviço' })
  name?: string;

  @ApiPropertyOptional({ description: 'Descrição detalhada do serviço' })
  description?: string;

  @ApiPropertyOptional({ description: 'Preço do serviço', example: 19.99 })
  price?: number;

  @ApiPropertyOptional({ description: 'Quantidade do serviço em estoque', example: 100 })
  stock_quantity?: number;
}