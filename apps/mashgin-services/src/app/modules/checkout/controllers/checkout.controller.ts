import { Body, Controller, Post } from '@nestjs/common';
import { CheckoutService } from '../services/checkout.service';
import { SchemaValidator } from '../../shared/decorators/schema-validator.decorator';
import { saveCheckoutOnQueueValidator } from '../validators/save-checkout-on-queue-validator';

@Controller('checkout')
export class CheckoutController {
  constructor(private checkoutService: CheckoutService) {}

  @Post('/')
  @SchemaValidator(saveCheckoutOnQueueValidator)
  async searchFoods(@Body() payload) {
    const data = await this.checkoutService.saveCheckoutOnQueue(payload);

    return data;
  }
}
