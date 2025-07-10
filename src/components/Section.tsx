import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section
      className="container mx-auto mt-20 flex max-w-5xl flex-col gap-5"
      id={id}
    >
      <h2 className="text-7xl text-red-400">{title}</h2>
      {children}
    </section>
  );
}
