import { Header } from './components/Header';
import { Section } from './components/Section';

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full px-8">
        <Section id="about" title="About">
          <h1 className="text-8xl">
            Hello, I'm <br /> a Full-stack Developer
          </h1>
          <p className="max-w-[600px] text-base/7 text-gray-200">
            I am a Junior Full Stack Developer with a strong passion for solving
            complex problems and a constant desire to learn and grow. <br />
            <br /> I have hands-on experience with <strong>HTML</strong>,
            <strong> CSS</strong>, <strong>Javascript</strong>, and
            <strong> Typescript</strong>, as well as frameworks and technologies
            such as <strong>React.js</strong> and <strong>Node.js</strong> (
            <strong>Express.js</strong>, <strong>Fastify </strong>
            and <strong>Nest .js</strong> ) acquired through academic projects,
            professional experience, and personal initiatives. <br />
            <br /> I actively seek to stay current with the latest industry
            trends and tools, aiming to expand my knowledge and deliver
            innovative, efficient solutions.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="w-full bg-red-500">Skills</div>
        </Section>
      </main>
    </div>
  );
}
