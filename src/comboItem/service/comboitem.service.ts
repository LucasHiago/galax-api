import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComboItem } from '../entities/comboitem.entity';
import { CreateComboItemDto } from '../dto/create-comboitem.dto';
import { UpdateComboItemDto } from '../dto/update-comboitem.dto';
import { IComboItemService } from '../interface/comboitem.interface';
import { Product } from '../../products/entities/product.entity';
import { Services } from '../../services/entities/services.entity';

@Injectable()
export class ComboItemService implements IComboItemService {
  constructor(
    @InjectRepository(ComboItem)
    private comboItemRepository: Repository<ComboItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Services)
    private servicesRepository: Repository<Services>,
  ) {}

  async create(createComboItemDto: CreateComboItemDto): Promise<ComboItem> {
    const comboItem = new ComboItem();

    if (createComboItemDto.productId) {
      const product = await this.productRepository.findOne({ where: { product_id: createComboItemDto.productId } });
      if (!product) {
        throw new NotFoundException(`Product with ID "${createComboItemDto.productId}" not found`);
      }
      comboItem.product = Promise.resolve(product);
    }

    if (createComboItemDto.serviceId) {
      const service = await this.servicesRepository.findOne({ where: { service_id: createComboItemDto.serviceId } });
      if (!service) {
        throw new NotFoundException(`Service with ID "${createComboItemDto.serviceId}" not found`);
      }
      comboItem.service = Promise.resolve(service);
    }

    return this.comboItemRepository.save(comboItem);
  }

  async findAll(): Promise<ComboItem[]> {
    return this.comboItemRepository.find();
  }

  async findOne(id: number): Promise<ComboItem> {
    const comboItem = await this.comboItemRepository.findOne({ where: { combo_id: id } });
    if (!comboItem) {
      throw new NotFoundException(`ComboItem with ID "${id}" not found`);
    }
    return comboItem;
  }

  async update(id: number, updateComboItemDto: UpdateComboItemDto): Promise<ComboItem> {
    const comboItem = await this.comboItemRepository.preload({
      combo_id: id,
      ...updateComboItemDto,
    });

    if (!comboItem) {
      throw new NotFoundException(`ComboItem with ID "${id}" not found`);
    }

    return this.comboItemRepository.save(comboItem);
  }

  async remove(id: number): Promise<void> {
    const comboItem = await this.findOne(id);
    await this.comboItemRepository.remove(comboItem);
  }
}