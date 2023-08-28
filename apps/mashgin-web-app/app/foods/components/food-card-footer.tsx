'use client';

import { Food } from '@prisma/client';
import useCartItems from '@web/app/cart/hooks/use-checkout-items';
import { Button } from '@web/libs/components/button';
import { Input } from '@web/libs/components/input';
import { Label } from '@web/libs/components/label';

type Props = {
  food: Food;
};

export default function FoodCardFooter({ food }: Props) {
  const { addOrUpdateCartItem } = useCartItems();

  return (
    <div className="flex w-full items-end justify-between">
      <div className="grid max-w-sm items-center gap-1.5 w-14">
        <Label htmlFor="quantity">Quantity</Label>
        <Input id="quantity" type="number" defaultValue="1" />
      </div>

      <Button onClick={() => addOrUpdateCartItem({ id: food.id, quantity: 1 })}>
        Add to cart
      </Button>
    </div>
  );
}
