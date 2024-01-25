
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Services } from '../../services/entities/services.entity';

@Entity()
export class ComboItem {
  @PrimaryGeneratedColumn()
  combo_id: number;

  @ManyToOne(() => Product, { nullable: true, lazy: true })
  product: Promise<Product>;

  @ManyToOne(() => Services, { nullable: true, lazy: true })
  service: Promise<Services>;
}