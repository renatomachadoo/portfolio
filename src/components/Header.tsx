export function Header() {
  return (
    <header className="w-full bg-gray-900/20 px-8 py-4" id="header">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-base md:flex-row">
        <span className="min-w-fit font-semibold uppercase">
          Renato Machado
        </span>
        <nav className="flex w-full items-center justify-center gap-4 text-gray-200 md:justify-end">
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
