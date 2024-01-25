import { Injectable } from '@nestjs/common';
import { ProductService } from '../../products/service/product.service';
import { servicesService } from '../../services/service/services.service';
import { ComboItemService } from '../../comboItem/service/comboitem.service';
import { BothDto } from '../dto/both.dto';
import { IBothService } from '../interface/both.interface';

@Injectable()
export class BothService implements IBothService {
  constructor(
    private productService: ProductService,
    private serviceService: servicesService,
    private comboItemService: ComboItemService
  ) {}

  async findAll(): Promise<BothDto> {
    const products = await this.productService.findAll();
    const services = await this.serviceService.findAll();
    const combos = await this.comboItemService.findAll();

    return { products, services, combos };
  }
}