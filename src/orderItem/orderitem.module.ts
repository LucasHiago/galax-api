import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemController } from './controller/orderitem.controller';
import { OrderItemService } from './service/orderitem.service';
import { OrderItem } from './entities/orderitem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem])],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})

export class OrderItemModule {}