import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StaticModule } from './modules/static/static.module';
import { FoodsModule } from './modules/foods/foods.module';

@Module({
  imports: [ConfigModule.forRoot(), StaticModule, FoodsModule],
})
export class AppModule {}
