import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../../shared/database/database.service';

@Injectable()
export class FoodService {
  private readonly logger = new Logger(FoodService.name);

  constructor(private databaseService: DatabaseService) {}

  async search() {
    const items = await this.databaseService.food.findMany({
      include: {
        category: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return items;
  }
}
