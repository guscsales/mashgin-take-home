import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { FoodService } from './services/food.service';
import { FoodsController } from './controllers/foods.controller';

@Module({
  imports: [SharedModule],
  providers: [FoodService],
  controllers: [FoodsController],
})
export class FoodsModule {}
