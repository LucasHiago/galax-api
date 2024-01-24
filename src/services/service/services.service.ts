import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from '../entities/services.entity';
import { CreateServicesDto} from '../dto/create-services.dto';
import { UpdateServicesDto } from '../dto/update-services.dto';
import { IServicesService } from '../interface/services.interface';

@Injectable()
export class servicesService implements IServicesService {
  constructor(
    @InjectRepository(Services)
    private serivcesRepository: Repository<Services>,
  ) {}

  async create(createServicesDto: CreateServicesDto): Promise<Services> {
    const services = this.serivcesRepository.create(createServicesDto);
    return this.serivcesRepository.save(services);
  }

  async findAll(): Promise<Services[]> {
    return this.serivcesRepository.find();
  }

  async findOne(id: number): Promise<Services> {
    const product = await this.serivcesRepository.findOne({ where: { service_id: id } });
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  async update(id: number, updateServicesDto: UpdateServicesDto): Promise<Services> {
    const product = await this.serivcesRepository.preload({
      service_id: id,
      ...updateServicesDto,
    });

    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }

    return this.serivcesRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.serivcesRepository.remove(product);
  }
}