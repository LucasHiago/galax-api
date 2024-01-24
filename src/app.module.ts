import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/product.module';
import { ServicesModule } from './services/services.module';
import { CombosModule } from './combos/combos.module';
import { ComboItemModule } from './comboItem/comboitem.module';
import { BudgetModule } from './budgets/budget.module';
import { OrderModule } from './orders/orders.module';
import { OrderItemModule } from './orderItem/orderitem.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('POSTGRES_HOST'),
        port: config.get('POSTGRES_PORT'),
        username: config.get('POSTGRES_USER'),
        password: config.get('POSTGRES_PASSWORD'),
        database: config.get('POSTGRES_DB'),
        autoLoadEntities: true,
        synchronize: true
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ProductModule,
    ServicesModule,
    CombosModule,
    ComboItemModule,
    BudgetModule,
    OrderModule,
    OrderItemModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
