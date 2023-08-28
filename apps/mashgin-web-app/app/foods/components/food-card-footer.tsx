'use client';

import { Food } from '@prisma/client';
import { Button } from '@web/libs/components/button';
import { Input } from '@web/libs/components/input';
import { Label } from '@web/libs/components/label';

type Props = {
  food?: Food;
};

export default function FoodCardFooter({ food }: Props) {
  return (
    <div className="flex w-full items-end justify-between">
      <div className="grid max-w-sm items-center gap-1.5 w-14">
        <Label htmlFor="quantity">Quantity</Label>
        <Input id="quantity" type="number" defaultValue="1" />
      </div>

      <Button>Add to cart</Button>
    </div>
  );
}
