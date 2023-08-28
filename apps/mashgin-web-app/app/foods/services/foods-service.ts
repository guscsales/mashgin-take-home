import { Category, Food } from '@prisma/client';
import { api } from '../../../libs/api/index';

async function search() {
  const { data } = await api.get<{ items: (Food & { category: Category })[] }>(
    '/foods/search'
  );

  return data?.items || [];
}

export const FoodsService = {
  search,
};
