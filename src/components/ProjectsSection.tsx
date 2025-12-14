// src/components/ProjectsSection.tsx
import { projects } from '../data/projects';
import Container from './Container';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan/80">
              Projects
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              Web Marketing × AI-driven Creation
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-slate-300">
              本業のWebマーケ経験と、個人で作り込んでいるフロントエンド / AIツールの作品たち。
              数字を見る目と、AIを使った制作スピードを活かして、『自分が本当に使いたいプロダクト』を形にしています。
            </p>
          </div>
          <div className="text-xs text-slate-400 space-y-1 md:text-right">
            <span className="block">Stack: React / TypeScript / Tailwind / Node / Gemini</span>
            <span className="block">Focus: UX, Automation, Personal Tools</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex justify-center w-full">
               <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
