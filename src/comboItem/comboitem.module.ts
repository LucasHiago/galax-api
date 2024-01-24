import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboItemController } from './controller/comboitem.controller';
import { ComboItemService } from './service/comboitem.service';
import { ComboItem } from './entities/comboitem.entity';
import { Product } from '../products/entities/product.entity';
import { Services } from '../services/entities/services.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComboItem, Product, Services])],
  controllers: [ComboItemController],
  providers: [ComboItemService],
})
export class ComboItemModule {}