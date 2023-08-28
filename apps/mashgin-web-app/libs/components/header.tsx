import { AiFillStar } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="container mt-4">
      <div className="text-2xl font-bold text-zinc-900 cursor-default flex items-center gap-1">
        <AiFillStar className="-mt-1 fill-yellow-600" /> Mashgin Restaurant
      </div>
    </header>
  );
}
