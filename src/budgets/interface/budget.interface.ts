import { Budget } from '../entities/budget.entity';
import { CreateBudgetDto } from '../dto/create-budget.dto';
import { UpdateBudgetDto } from '../dto/update-budget.dto';

export interface IBudgetService {
  create(createBudgetDto: CreateBudgetDto): Promise<Budget>;
  findAll(): Promise<Budget[]>;
  findOne(id: number): Promise<Budget>;
  update(id: number, updateBudgetDto: UpdateBudgetDto): Promise<Budget>;
  remove(id: number): Promise<void>;
}