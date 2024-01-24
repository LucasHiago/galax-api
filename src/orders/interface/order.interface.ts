import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

export interface IOrderService {
  create(createOrderDto: CreateOrderDto): Promise<Order>;
  findAll(): Promise<Order[]>;
  findOne(id: number): Promise<Order>;
  update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
  remove(id: number): Promise<void>;
}