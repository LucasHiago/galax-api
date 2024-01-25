
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { Services } from '../../services/entities/services.entity';
import { Combos } from 'src/combos/entities/combos.entity';

@Entity()
export class BothItems {
  @PrimaryGeneratedColumn()
  both_id: number;

  @ManyToOne(() => Product, { nullable: true })
  products: Product;

  @ManyToOne(() => Services, { nullable: true })
  services: Services;

  @ManyToOne(() => Combos, { nullable: true })
  combos: Combos;
}