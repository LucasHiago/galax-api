export class GenericItemDto {
  id: number;
  name: string;
  description?: string;
  price?: string;
  stock_quantity?: number;
  type: 'product' | 'service' | 'combo';
}