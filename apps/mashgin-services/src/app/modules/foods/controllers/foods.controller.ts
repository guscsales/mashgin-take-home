import { Controller, Get } from '@nestjs/common';
import { FoodService } from '../services/food.service';

@Controller('foods')
export class FoodsController {
  constructor(private foodService: FoodService) {}

  @Get('/search')
  async searchFoods() {
    // TODO: add more filters
    const items = await this.foodService.search();

    return { items };
  }
}
