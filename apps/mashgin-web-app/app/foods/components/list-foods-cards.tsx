import { FoodsService } from '../services/foods-service';
import FoodCard from './food-card';

export default async function ListFoodsCards() {
  const foods = await FoodsService.search();

  console.log(foods);

  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {foods.map((food) => (
        <FoodCard key={`food-${food.id}`} food={food} />
      ))}
    </div>
  );
}
