import { Injectable, Logger } from '@nestjs/common';
import { Food } from '@prisma/client';
import { DatabaseService } from '../../shared/database/database.service';

enum CheckoutStatuses {
  InAnalysis = 'in_analysis',
  Done = 'done',
}

interface DoPaymentRequest {
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

  constructor(private databaseService: DatabaseService) {}

  async doPayment({ foods, card, email, name }: DoPaymentRequest) {
    await this.databaseService.payment.create({
      data: {
        name,
        email,
        cardNumber: card.number,
        exp: card.exp,
        cvc: card.cvc,
        paymentItems: {
          createMany: {
            data: foods.map((item) => ({
              foodId: item.id,
              quantity: item.quantity,
            })),
          },
        },
      },
    });
  }
}
