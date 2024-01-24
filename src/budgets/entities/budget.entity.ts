import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Services } from '../../services/entities/services.entity';
import { ComboItem } from '../../comboItem/entities/comboitem.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  budget_id: number;

  @Column()
  session_id: string;

  @ManyToOne(() => Product, { nullable: true })
  product: Product;

  @ManyToOne(() => Services, { nullable: true })
  service: Services;

  @ManyToOne(() => ComboItem, { nullable: true })
  comboItem: ComboItem;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  budget_price: number;
}