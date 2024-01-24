import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Product } from '../../products/entities/product.entity';
import { Services } from '../../services/entities/services.entity';
import { ComboItem } from '../../comboItem/entities/comboitem.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, { nullable: true })
  order: Order;

  @ManyToOne(() => Product, { nullable: true })
  product: Product;

  @ManyToOne(() => Services, { nullable: true })
  service: Services;

  @ManyToOne(() => ComboItem, { nullable: true })
  comboItem: ComboItem;

  @Column('int')
  quantity: number;
}