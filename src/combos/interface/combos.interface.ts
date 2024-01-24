import { Combos } from '../entities/combos.entity';
import { CreateCombosDto } from '../dto/create-combos.dto';
import { UpdateCombosDto } from '../dto/update-combos.dto';

export interface IComboService {
  create(createCombosDto: CreateCombosDto): Promise<Combos>;
  findAll(): Promise<Combos[]>;
  findOne(id: number): Promise<Combos>;
  update(id: number, updateCombosDto: UpdateCombosDto): Promise<Combos>;
  remove(id: number): Promise<void>;
}