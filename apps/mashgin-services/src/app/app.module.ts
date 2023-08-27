import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StaticModule } from './modules/static/static.module';
import { FoodsModule } from './modules/foods/foods.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { APP_GUARD } from '@nestjs/core';
import { SchemaValidatorGuard } from './modules/shared/decorators/schema-validator.decorator';

@Module({
  imports: [ConfigModule.forRoot(), StaticModule, FoodsModule, CheckoutModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: SchemaValidatorGuard,
    },
  ],
})
export class AppModule {}
