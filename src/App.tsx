export function App() {
  return (
    <div className="min-h-screen px-8 py-4">
      <div className="container mx-auto h-full">
        <header className="mx-auto flex items-center justify-center rounded-md bg-zinc-900 px-8 py-4">
          {/* <a className="hover:underline" href="#hero">
            Renato Machado
          </a> */}
          <nav className="flex items-center justify-center gap-8">
            <a className="uppercase hover:underline" href="#about-me">
              ABOUT-ME
            </a>
            <a className="uppercase hover:underline" href="#skills">
              SKILLS
            </a>
            <a className="uppercase hover:underline" href="#projects">
              PROJECTS
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
}
