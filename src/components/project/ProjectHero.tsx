import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLinkButton } from '../ExternalLinkButton';
import { COPY } from '../../constants/copy';
import { ProjectLinks } from '../ProjectLinks';

export type CoverImage = {
  src: string;
  alt: string;
};

export type MetricItem = {
  label: string;
  value: string;
};

type ProjectHeroProps = {
  name: string;
  subtitle: string;
  status: 'completed' | 'in-progress';
  coverImage?: CoverImage;
  projectType: string;
  role: string;
  period: string;
  tools: string[];
  metrics?: MetricItem[];
  liveUrl?: string;
  githubUrl?: string;
  links?: { demo?: string; github?: string; docs?: string; sample?: string };
  contribution?: string[];
};

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  name,
  subtitle,
  status,
  coverImage,
  projectType,
  role,
  period,
  tools,
  metrics,
  liveUrl,
  githubUrl,
  links,
  contribution,
}) => {
  const effectiveLinks = links || { demo: liveUrl, github: githubUrl };

  return (
    <section className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-500" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-emerald-400 transition-colors">{COPY.BREADCRUMB.HOME}</Link>
        <span className="text-slate-600">/</span>
        <Link to="/#projects" className="hover:text-emerald-400 transition-colors">{COPY.BREADCRUMB.PROJECTS}</Link>
        <span className="text-slate-600">/</span>
        <span className="text-slate-100">{name}</span>
      </nav>

      {/* Hero Grid */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
        {/* Left: Title + Cover */}
        <div className="space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1.5 border border-slate-700/60">
            <span className={`h-2.5 w-2.5 rounded-full ${status === 'completed' ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' : 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]'}`} />
            <span className="text-sm font-medium tracking-[0.15em] text-slate-300 uppercase">
              {status === 'completed' ? COPY.HERO.STATUS_COMPLETED : COPY.HERO.STATUS_IN_PROGRESS}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 leading-tight">
              {name}
            </h1>
            <p className="mt-3 text-xl lg:text-2xl font-medium uppercase tracking-[0.12em] text-emerald-400">
              {subtitle}
            </p>
          </div>

          {/* Cover Image */}
          {coverImage && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl">
              <img
                src={coverImage.src}
                alt={coverImage.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
             <ProjectLinks links={effectiveLinks} />
          </div>
        </div>

        {/* Right: Info Card */}
        <aside className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 space-y-5 lg:sticky lg:top-24">
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span className="text-slate-500">{COPY.HERO.TYPE}</span>
              <span className="text-slate-200 font-medium">{projectType}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-slate-500">{COPY.HERO.ROLE}</span>
              <span className="text-slate-200 font-medium text-right max-w-[55%]">{role}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-slate-500">{COPY.HERO.PERIOD}</span>
              <span className="text-slate-200 font-medium">{period}</span>
            </div>
          </div>

          {/* Contribution */}
          {contribution && contribution.length > 0 && (
            <div className="pt-4 border-t border-slate-700/50">
               <span className="text-slate-500 block mb-3 text-lg">{COPY.HERO.CONTRIBUTION}</span>
               <ul className="list-disc list-outside ml-4 space-y-1 text-slate-300 text-base">
                 {contribution.map((item, idx) => (
                   <li key={idx}>{item}</li>
                 ))}
               </ul>
            </div>
          )}

          <div className="pt-4 border-t border-slate-700/50">
            <span className="text-slate-500 block mb-3 text-lg">{COPY.HERO.STACK}</span>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full bg-slate-800 px-3 py-1.5 text-sm text-slate-300 border border-slate-700/60">
                  {tool}
                </span>
              ))}
            </div>
          </div>


          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="pt-4 border-t border-slate-700/50">
              <span className="text-xs uppercase tracking-[0.25em] text-slate-500 block mb-3">{COPY.HERO.SUMMARY_METRICS}</span>
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((m, idx) => (
                  <div key={idx} className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/40">
                    <p className="text-xl font-bold text-emerald-400">{m.value}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default ProjectHero;
