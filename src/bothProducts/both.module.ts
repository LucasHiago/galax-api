import { Module } from '@nestjs/common';
import { BothController } from './controller/both.controller';
import { BothService } from './service/both.service';
import { ProductModule } from '../products/product.module';
import { ServicesModule } from '../services/services.module';
import { ComboItemModule } from '../comboItem/comboitem.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BothItems } from './entities/both.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BothItems]), ProductModule, ServicesModule, ComboItemModule],
  controllers: [BothController],
  providers: [BothService],
})
export class BothModule {}