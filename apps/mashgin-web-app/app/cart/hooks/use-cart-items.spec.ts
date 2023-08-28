import { renderHook, act } from '@testing-library/react-hooks';
import useCartItems from './use-cart-items';

describe('Cart | Hooks | useCheckoutItems', () => {
  describe('when calling addOrUpdateCartItem', () => {
    describe('and there is no equal item on the cart', () => {
      it('saves the new item', () => {
        const { result } = renderHook(() => useCartItems());

        act(() => {
          result.current.addOrUpdateCartItem({ id: 1, quantity: 1 });
        });

        expect(result.current.items).toEqual([{ id: 1, quantity: 1 }]);
      });
    });

    describe('and there is equal item on the cart', () => {
      it('updates the item', () => {
        const { result } = renderHook(() => useCartItems());

        act(() => {
          result.current.addOrUpdateCartItem({ id: 1, quantity: 1 });
          result.current.addOrUpdateCartItem({ id: 1, quantity: 2 });
        });

        expect(result.current.items).toEqual([{ id: 1, quantity: 2 }]);
      });
    });
  });

  describe('when calling removeCartItem', () => {
    it('removes the item', () => {
      const { result } = renderHook(() => useCartItems());

      act(() => {
        result.current.addOrUpdateCartItem({ id: 1, quantity: 1 });
        result.current.removeCartItem(1);
      });

      expect(result.current.items).toEqual([]);
    });
  });
});
