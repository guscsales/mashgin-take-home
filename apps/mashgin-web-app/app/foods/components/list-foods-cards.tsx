import FoodCard from './food-card';

export default function ListFoodsCards() {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
}
