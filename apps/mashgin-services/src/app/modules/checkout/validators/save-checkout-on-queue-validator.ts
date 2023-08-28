import { z } from 'zod';
import { set, isAfter, isEqual } from 'date-fns';

export const saveCheckoutOnQueueValidator = z.object({
  foods: z.array(z.object({ id: z.number(), quantity: z.number() })),
  name: z.string(),
  email: z.string().email({ message: 'Invalid email' }),
  card: z.object({
    number: z
      .string()
      .refine(
        (value) => /^\d{16}$/.test(value),
        'Card number must be 16 digits'
      ),
    exp: z.string().refine((value) => {
      const currentDate = set(new Date(), {
        date: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
      const enteredDate = set(new Date(value), {
        date: 1,
        month: new Date(value).getMonth() + 1, // For some reason the set was decreasing a month
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });

      return (
        isEqual(enteredDate, currentDate) || isAfter(enteredDate, currentDate)
      );
    }, 'Expiration date must be a valid and future date'),
    cvc: z
      .string()
      .refine((value) => /^\d{3,4}$/.test(value), 'CVC must be 3 or 4 digits'),
  }),
});
