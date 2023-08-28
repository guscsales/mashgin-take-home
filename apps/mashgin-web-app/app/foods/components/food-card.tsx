import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '@web/libs/components/card';
import { LiaDollarSignSolid } from 'react-icons/lia';
import { categoriesMapper } from '@web/libs/mappers/categories-icons';
import CircleSeparator from '@web/libs/components/circle-separator';
import FoodCardFooter from './food-card-footer';
import { Category, Food } from '@prisma/client';

type Props = {
  food: Food & { category: Category };
};

const formatter = new Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 4,
});

export default function FoodCard({ food }: Props) {
  const { icon: Icon } = categoriesMapper[food.category.id];

  return (
    <Card>
      <CardImage
        src={`http://localhost:3000/statics/images/${food?.imageId}`}
        alt={`${food?.name} image`}
        className="w-full h-52"
      />
      <CardHeader>
        <CardTitle>{food?.name || '-'}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-zinc-500">
          <LiaDollarSignSolid className="-mt-1" />
          <span className="font-light">
            {formatter.format((food?.price as unknown as number) || 0) || '-'}
          </span>
        </div>
        <CircleSeparator />
        <div className="flex items-center gap-1 text-zinc-500">
          <Icon className="-mt-1" />
          <span className="font-light">{food?.category?.name || '-'}</span>
        </div>
      </CardContent>
      <CardFooter>
        <FoodCardFooter />
      </CardFooter>
    </Card>
  );
}
