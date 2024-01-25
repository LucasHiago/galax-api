import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from './entities/services.entity';
import { servicesService } from './service/services.service';
import { ServicesController } from './controller/services.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Services])],
  providers: [servicesService],
  controllers: [ServicesController],
  exports: [servicesService]
})
export class ServicesModule {}
