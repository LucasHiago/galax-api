import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Combos } from '../entities/combos.entity';
import { CreateCombosDto} from '../dto/create-combos.dto';
import { UpdateCombosDto } from '../dto/update-combos.dto';
import { IComboService } from '../interface/combos.interface';

@Injectable()
export class CombosService implements IComboService {
  constructor(
    @InjectRepository(Combos)
    private combosRepository: Repository<Combos>,
  ) {}

  async create(createCombosDto: CreateCombosDto): Promise<Combos> {
    const combos = this.combosRepository.create(createCombosDto);
    return this.combosRepository.save(combos);
  }

  async findAll(): Promise<Combos[]> {
    return this.combosRepository.find();
  }

  async findOne(id: number): Promise<Combos> {
    const product = await this.combosRepository.findOne({ where: { product_id: id } });
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  async update(id: number, updateCombosDto: UpdateCombosDto): Promise<Combos> {
    const product = await this.combosRepository.preload({
      product_id: id,
      ...updateCombosDto,
    });

    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }

    return this.combosRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.combosRepository.remove(product);
  }
}