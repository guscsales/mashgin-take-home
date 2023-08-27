import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { CheckoutService } from './services/checkout.service';
import { CheckoutController } from './controllers/checkout.controller';

@Module({
  imports: [SharedModule],
  providers: [CheckoutService],
  controllers: [CheckoutController],
})
export class CheckoutModule {}
