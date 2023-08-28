import useLocalStorage from 'use-local-storage';
import { CartItem } from '../models/cart-item';

export default function useCartItems() {
  const [items, setItems] = useLocalStorage<CartItem[]>('checkout_items', []);

  function isItemOnCart(id: number) {
    return items.findIndex((item) => item.id === id) >= 0;
  }

  function addOrUpdateCartItem({ id, quantity }: CartItem) {
    let newItems = [...items, { id, quantity }];

    console.log(items.findIndex((item) => item.id === id));

    if (isItemOnCart(id)) {
      newItems = items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }

    console.log(newItems);

    setItems(newItems);
  }

  function removeCartItem(id: number) {
    const index = items.findIndex((item) => item.id === id);

    setItems(items.slice(index, 1));
  }

  return {
    items,
    addOrUpdateCartItem,
    removeCartItem,
    isItemOnCart,
  };
}
