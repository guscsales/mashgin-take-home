import useCartItems from '@web/app/cart/hooks/use-cart-items';
import { fireEvent, render, waitFor } from '@testing-library/react';
import FoodCardFooter from './food-card-footer';
import { Food } from '@prisma/client';

jest.mock('../../cart/hooks/use-cart-items');

const useCartItemsMock = useCartItems as jest.Mock;

const food = {
  id: 1,
  name: 'test',
  price: 1,
  imageId: 'test-image',
  categoryId: 1,
};

describe('Foods | Components | FoodCardFooter', () => {
  describe('when submitting', () => {
    it('calls the function to save the new item', async () => {
      const addOrUpdateCartItem = jest.fn();
      useCartItemsMock.mockReturnValue({
        items: [],
        addOrUpdateCartItem,
      });

      const component = render(
        <FoodCardFooter food={food as unknown as Food} />
      );

      fireEvent.change(component.getByLabelText('Quantity'), {
        target: {
          value: '2',
        },
      });
      fireEvent.submit(component.getByTestId('add-to-cart-form'));

      await waitFor(() => {
        expect(addOrUpdateCartItem).toHaveBeenCalledWith({
          id: food.id,
          quantity: '2',
        });
      });
    });
  });
});
