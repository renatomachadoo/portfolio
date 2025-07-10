export function Header() {
  return (
    <header className="w-full bg-gray-900/20 px-8 py-4">
      <div className="container mx-auto flex max-w-5xl items-center justify-between text-base">
        <span className="font-semibold uppercase">Renato Machado</span>
        <nav className="flex items-center justify-center gap-4 text-gray-200">
          <a className="hover:underline" href="#home">
            Home
          </a>
          <a className="hover:underline" href="#about">
            About
          </a>
          <a className="hover:underline" href="#skills">
            Skills
          </a>
          <a className="hover:underline" href="#projects">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
