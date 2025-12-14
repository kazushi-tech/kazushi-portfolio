import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { ProjectLinks } from './ProjectLinks';

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const statusLabel =
    project.status === 'completed' ? 'Completed' : 'In Progress';

  const statusColor =
    project.status === 'completed'
      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
      : 'bg-neon-orange/20 text-neon-orange border-neon-orange/40';

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-600/80 bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-800/90 p-[1px] w-full max-w-[540px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,240,255,0.2)] hover:border-neon-cyan/50">
      <div className="relative h-full rounded-2xl bg-slate-900/95 flex flex-col">
        {/* サムネ画像 */}
        <div className="relative w-full overflow-hidden rounded-t-2xl h-52 sm:h-60">
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 transition-opacity duration-300 group-hover:from-slate-950/95 group-hover:via-slate-950/60" />
          {/* Title overlay on hover */}
          <div className="absolute bottom-4 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              {project.name}
            </h3>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="relative flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <header className="flex items-center justify-between gap-2">
            <div className="space-y-1">
              <p className="text-xs tracking-[0.2em] text-neon-cyan/80 uppercase">
                {project.shortName}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-50 leading-tight">
                {project.name}
              </h3>
            </div>
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase ${statusColor}`}
            >
              {statusLabel}
            </span>
          </header>

          {/* Problem / Approach / Outcome */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium line-clamp-2">
              {project.problem}
            </p>
            <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">
              <span className="text-neon-cyan/70 font-medium">Approach: </span>
              {project.approach}
            </p>
            <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">
              <span className="text-emerald-400/70 font-medium">Outcome: </span>
              {project.outcome}
            </p>
          </div>

          {/* Tech tags */}
          <div className="mt-1 flex flex-wrap gap-1.5 min-h-[1.5rem]">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-wide text-neon-cyan/80"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[10px] text-slate-500 self-center">+{project.tech.length - 5}</span>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="mt-3 flex flex-wrap gap-3 items-center">
            {/* Case Study button */}
            {project.caseStudyUrl && (
              <Link
                to={project.caseStudyUrl}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 font-medium text-emerald-400 text-sm transition-all duration-200 hover:bg-emerald-500/20 hover:text-emerald-300 hover:scale-[1.02]"
              >
                Case Study
                <span className="text-sm">→</span>
              </Link>
            )}
            
            <ProjectLinks 
              links={project.links || (project.link && !project.link.startsWith('/') ? { demo: project.link } : undefined)} 
            />
          </div>
        </div>
      </div>
    </article>
  );
};
