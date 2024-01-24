import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Combos } from './entities/combos.entity';
import { CombosService } from './service/services.service';
import { CombosController } from './controller/combos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Combos])],
  providers: [CombosService],
  controllers: [CombosController]
})
export class CombosModule {}
