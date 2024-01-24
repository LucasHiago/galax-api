import { ComboItem } from '../entities/comboitem.entity';
import { CreateComboItemDto } from '../dto/create-comboitem.dto';
import { UpdateComboItemDto } from '../dto/update-comboitem.dto';

export interface IComboItemService {
  create(createComboItemDto: CreateComboItemDto): Promise<ComboItem>;
  findAll(): Promise<ComboItem[]>;
  findOne(id: number): Promise<ComboItem>;
  update(id: number, updateComboItemDto: UpdateComboItemDto): Promise<ComboItem>;
  remove(id: number): Promise<void>;
}