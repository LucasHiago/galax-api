import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateBudgetDto {
  @ApiProperty({ description: 'ID da sessão do navegador' })
  session_id: string;

  @ApiProperty({ description: 'Nome do usuário' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Endereço de e-mail' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'ID do produto', required: false })
  productId?: number;

  @ApiProperty({ description: 'ID do serviço', required: false })
  serviceId?: number;

  @ApiProperty({ description: 'ID do combo', required: false })
  comboItemId?: number;

  @ApiProperty({ description: 'Quantidade' })
  quantity: number;

  @ApiProperty({ description: 'Preço do orçamento' })
  budget_price: number;
}