import dynamic from 'next/dynamic';
import { AiFillStar } from 'react-icons/ai';

const GoToChartButton = dynamic(
  () => import('@web/app/cart/components/go-to-cart-button'),
  { ssr: false }
);

export default function Header() {
  return (
    <header className="container flex items-center justify-between fixed bg-zinc-50 top-0 z-10 py-3 border-b border-solid border-zinc-200">
      <div className="text-2xl font-bold text-zinc-900 cursor-default flex items-center gap-1">
        <AiFillStar className="-mt-1 fill-yellow-600" /> Mashgin Restaurant
      </div>

      <GoToChartButton />
    </header>
  );
}
