import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboItemController } from './controller/comboitem.controller';
import { ComboItemService } from './service/comboitem.service';
import { ComboItem } from './entities/comboitem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComboItem])],
  controllers: [ComboItemController],
  providers: [ComboItemService],
})
export class ComboItemModule {}