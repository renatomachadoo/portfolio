import HeartIcon from '../assets/icons/heart.svg?react';

export function Footer() {
  return (
    <footer className="mt-20 flex items-center justify-center gap-2 rounded-t-2xl bg-gray-900/20 px-8 py-4 text-gray-200">
      Made with <HeartIcon className="size-4" /> by Renato Machado
    </footer>
  );
}
