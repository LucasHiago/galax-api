import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from '../dto/role-user.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; 

  @Column()
  contact_number: string;

  @Column()
  address: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;
}