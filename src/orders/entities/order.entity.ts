import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { OrderStatus } from '../dto/order.enum';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => User, { nullable: true })
  user: User;

  @Column('decimal', { precision: 10, scale: 2 })
  total_price: number;

  @Column({ type: 'enum', enum: OrderStatus })
  status: OrderStatus;
}