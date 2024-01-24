import { ApiProperty } from '@nestjs/swagger';

export class CreateComboItemDto {
  @ApiProperty({ description: 'ID do produto associado', nullable: true })
  productId?: number;

  @ApiProperty({ description: 'ID do serviço associado', nullable: true })
  serviceId?: number;
}