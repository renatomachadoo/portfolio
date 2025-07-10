import { ChevronUp } from 'lucide-react';
import HeartIcon from '../assets/icons/heart.svg?react';

export function Footer() {
  return (
    <footer className="relative mt-20 flex items-center justify-center gap-2 bg-gray-900/20 px-8 py-4 text-gray-200">
      Made with <HeartIcon className="size-4" /> by Renato Machado
      <a
        className="absolute right-2 rounded bg-gray-700/30 p-2 text-red-400"
        href="#header"
      >
        <ChevronUp />
      </a>
    </footer>
  );
}
