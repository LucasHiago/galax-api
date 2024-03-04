import { DynamicModule, Module } from '@nestjs/common';
import { PagarMeService } from './pagarMe/service/pagarme.service';
import { PaymentService } from './service/payments.service';

@Module({})
export class PaymentsModule {
  static register(option: string): DynamicModule {
    return {
      module: PaymentsModule,
      providers: [
        {
          provide: 'IPaymentMethod',
          useClass: PagarMeService
        },
        PaymentService
      ],
      exports: [PaymentService]
    }
  }
}
