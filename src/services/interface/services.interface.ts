import { Services } from '../entities/services.entity';
import { CreateServicesDto } from '../dto/create-services.dto';
import { UpdateServicesDto } from '../dto/update-services.dto';

export interface IServicesService {
  create(createServicesDto: CreateServicesDto): Promise<Services>;
  findAll(): Promise<Services[]>;
  findOne(id: number): Promise<Services>;
  update(id: number, updateServicesDto: UpdateServicesDto): Promise<Services>;
  remove(id: number): Promise<void>;
}