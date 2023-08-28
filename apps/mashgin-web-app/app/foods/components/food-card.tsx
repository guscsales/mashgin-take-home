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

export default function FoodCard() {
  const { icon: Icon } = categoriesMapper['1'];

  return (
    <Card>
      <CardImage
        src="http://localhost:3000/statics/images/23f95765b967ff"
        alt="Bread"
        className="w-full h-52"
      />
      <CardHeader>
        <CardTitle>Bread</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-zinc-500">
          <LiaDollarSignSolid className="-mt-1" />
          <span className="font-light">1,00</span>
        </div>
        <CircleSeparator />
        <div className="flex items-center gap-1 text-zinc-500">
          <Icon className="-mt-1" />
          <span className="font-light">Bakery</span>
        </div>
      </CardContent>
      <CardFooter>
        <FoodCardFooter />
      </CardFooter>
    </Card>
  );
}
