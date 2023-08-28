'use client';

import { Button } from '@web/libs/components/button';
import useCheckoutItems from '@web/app/cart/hooks/use-cart-items';

export default function GoToChartButton() {
  const { items } = useCheckoutItems();

  return (
    <Button variant="secondary" className="relative">
      {items.length > 0 && (
        <div className="absolute -right-2 -top-2 p-2 rounded-full bg-red-500 font-bold text-zinc-50 text-xs h-6 flex items-center justify-center">
          {items.length}
        </div>
      )}
      Cart
    </Button>
  );
}
