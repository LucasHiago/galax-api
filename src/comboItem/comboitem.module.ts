import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboItemController } from './controller/comboitem.controller';
import { ComboItemService } from './service/comboitem.service';
import { ComboItem } from './entities/comboitem.entity';
import { ProductModule } from 'src/products/product.module';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [TypeOrmModule.forFeature([ComboItem]), ProductModule, ServicesModule],
  controllers: [ComboItemController],
  providers: [ComboItemService],
  exports: [ComboItemService]
})

export class ComboItemModule {}