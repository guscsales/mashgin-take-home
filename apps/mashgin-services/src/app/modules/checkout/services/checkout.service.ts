import { Injectable, Logger } from '@nestjs/common';
import { Food } from '@prisma/client';

enum CheckoutStatuses {
  InAnalysis = 'in_analysis',
  Done = 'done',
}

interface SaveCheckoutOnQueueRequest {
  foods: {
    id: Food['id'];
    quantity: number;
  }[];
  name: string;
  email: string;
  card: {
    number: string;
    exp: string; // 2023-08-01
    cvc: string;
  };
}

@Injectable()
export class CheckoutService {
  private readonly logger = new Logger(CheckoutService.name);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async saveCheckoutOnQueue(payload: SaveCheckoutOnQueueRequest) {
    // TODO: send to SQS
    return {
      status: CheckoutStatuses.InAnalysis,
    };
  }
}
