import { Injectable } from '@nestjs/common';
import { ProductService } from '../../products/service/product.service';
import { servicesService } from '../../services/service/services.service';
import { ComboItemService } from '../../comboItem/service/comboitem.service';
import { IBothService } from '../interface/both.interface';
import { GenericItemDto } from '../dto/genericItemDto.dto';

@Injectable()
export class BothService implements IBothService {
  constructor(
    private productService: ProductService,
    private serviceService: servicesService,
    private comboItemService: ComboItemService
  ) {}

  async findAll(): Promise<GenericItemDto[]> {
    const products = await this.productService.findAll();
    const services = await this.serviceService.findAll();
    const combos = await this.comboItemService.findAll();

    return [
      ...products.map(item => this.mapGenericItem(item, 'product')),
      ...services.map(item => this.mapGenericItem(item, 'service')),
      ...combos.map(item => this.mapGenericItem(item, 'combo'))
    ];
  }

  private mapGenericItem(item: any, type: 'product' | 'service' | 'combo') : GenericItemDto {
    return { ...item, type }
  }
}