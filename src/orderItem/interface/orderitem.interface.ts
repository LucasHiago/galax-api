import { OrderItem } from '../entities/orderitem.entity';
import { CreateOrderItemDto } from '../dto/create-orderitem.dto';
import { UpdateOrderItemDto } from '../dto/update-orderitem.dto';

export interface IOrderItemService {
  create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem>;
  findAll(): Promise<OrderItem[]>;
  findOne(id: number): Promise<OrderItem>;
  update(id: number, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItem>;
  remove(id: number): Promise<void>;
}