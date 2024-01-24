import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Services {
  @PrimaryGeneratedColumn()
  service_id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('int')
  stock_quantity: number;
}