import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboItemController } from './controller/comboitem.controller';
import { ComboItemService } from './service/comboitem.service';
import { ComboItem } from './entities/comboitem.entity';
import { ProductModule } from 'src/products/product.module';
import { ServicesModule } from 'src/services/services.module';
import { Product } from 'src/products/entities/product.entity';
import { Services } from 'src/services/entities/services.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComboItem, Product, Services]), ProductModule, ServicesModule],
  controllers: [ComboItemController],
  providers: [ComboItemService],
  exports: [ComboItemService]
})

export class ComboItemModule {}