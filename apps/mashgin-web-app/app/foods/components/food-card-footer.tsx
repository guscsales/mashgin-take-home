'use client';

import { Food } from '@prisma/client';
import useCartItems from '@web/app/cart/hooks/use-cart-items';
import { Button } from '@web/libs/components/button';
import { Input } from '@web/libs/components/input';
import { Label } from '@web/libs/components/label';
import { useForm } from 'react-hook-form';

type Props = {
  food: Food;
};

export default function FoodCardFooter({ food }: Props) {
  const { items, addOrUpdateCartItem } = useCartItems();
  const form = useForm({
    defaultValues: {
      quantity: items.find((item) => item.id)?.quantity || 1,
    },
  });

  function onSubmit({ quantity }: { quantity: number }) {
    addOrUpdateCartItem({ id: food.id, quantity });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full items-end justify-between"
      data-testid="add-to-cart-form"
    >
      <div className="grid max-w-sm items-center gap-1.5 w-20">
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          aria-label="Quantity"
          id="quantity"
          type="number"
          min={1}
          {...form.register('quantity', { required: true, min: 1 })}
        />
      </div>

      <Button
        type="submit"
        state={form.formState.isValid ? 'default' : 'disabled'}
      >
        Add to cart
      </Button>
    </form>
  );
}
