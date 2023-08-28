import useLocalStorage from 'use-local-storage';
import { CartItem } from '../models/cart-item';

export default function useCartItems() {
  const [items, setItems] = useLocalStorage<CartItem[]>('checkout_items', []);

  function isItemOnCart(id: number) {
    return items.findIndex((item) => item.id === id) >= 0;
  }

  function addOrUpdateCartItem({ id, quantity }: CartItem) {
    let newItems = [...items, { id, quantity }];

    if (isItemOnCart(id)) {
      newItems = items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }

    setItems(newItems);
  }

  function removeCartItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  return {
    items,
    addOrUpdateCartItem,
    removeCartItem,
    isItemOnCart,
  };
}
