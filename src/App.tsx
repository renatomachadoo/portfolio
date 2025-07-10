import CssIcon from './assets/icons/css.svg?react';
import FigmaIcon from './assets/icons/figma.svg?react';
import HtmlIcon from './assets/icons/html.svg?react';
import JavascriptIcon from './assets/icons/js.svg?react';
import NodeJSIcon from './assets/icons/nodejs.svg?react';
import ReactIcon from './assets/icons/react.svg?react';
import TypescriptIcon from './assets/icons/ts.svg?react';
import { Footer } from './components/Footer';

import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Section } from './components/Section';
import { Tooltip } from './components/ui/Tooltip';

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
          <div className="grid w-full grid-cols-4 gap-4">
            <div className="h-fit w-full rounded-lg px-8 py-4">
              <Tooltip text="HTML5">
                <HtmlIcon className="h-fit max-w-full rounded-2xl object-cover" />
              </Tooltip>
            </div>
            <div className="h-fit w-full rounded-lg px-8 py-4">
              <Tooltip text="CSS3">
                <CssIcon className="h-fit max-w-full rounded-2xl object-cover" />
              </Tooltip>
            </div>
            <div className="h-fit w-full rounded-lg px-8 py-4">
              <Tooltip text="Javascript">
                <JavascriptIcon className="h-fit max-w-full rounded-2xl object-cover" />
              </Tooltip>
            </div>
            <div className="h-fit w-full rounded-lg px-8 py-4">
              <Tooltip text="Typescript">
                <TypescriptIcon className="h-fit max-w-full rounded-2xl object-cover" />
              </Tooltip>
            </div>
            <div className="h-fit w-full rounded-lg px-8 py-4">
              <Tooltip text="NodeJS">
                <NodeJSIcon className="h-fit max-w-full rounded-2xl object-cover" />
              </Tooltip>
            </div>
            <div className="h-fit w-full rounded-lg px-8 py-4">
              <Tooltip text="React.JS">
                <ReactIcon className="h-fit max-w-full rounded-2xl object-cover" />
              </Tooltip>
            </div>
            <div className="h-fit w-full rounded-lg px-8 py-4">
              <Tooltip text="Figma">
                <FigmaIcon className="h-fit max-w-full rounded-2xl object-cover" />
              </Tooltip>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
