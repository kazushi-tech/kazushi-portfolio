import React from 'react';
import Footer from './Footer';
import {
  ProjectHero,
  SummaryCard,
  FeatureWalkthrough,
  TimelineProcess,
  OutcomeSection,
  ProjectNavigation,
} from './project';
import UnifiedGallery, { GalleryItem } from './project/UnifiedGallery';
import { ExternalLinkButton } from './ExternalLinkButton';
import ContentListSection from './project/ContentListSection';
import TableOfContents from './project/TableOfContents';
import type { CoverImage, MetricItem, FeatureItem, TimelineStep, KeyScreen } from './project';
import { COPY } from '../constants/copy';
import { ProjectLinks } from './ProjectLinks';
import Container from './Container';

// Update Props to include new sections
export type ProjectDetailLayoutProps = {
  // Hero
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
  contribution?: string[];
  links?: { demo?: string; github?: string; docs?: string; sample?: string };
  
  // Summary
  summary: {
    problem: string;
    solution: string;
    impact: string;
  };

  howItWorks?: {
    title: string;
    steps: Array<{ title: string; description: string; icon?: React.ReactNode }>;
  };

  roadmap?: {
    title: string;
    items: Array<{ label: string; status: 'now' | 'next' | 'future' }>;
  };

  // Challenges
  challenges?: Array<{ description: string }>;

  // Key Screens & Gallery -> Unified
  // We accept both legacy props (to not break existing pages immediately if types mismatch) but favor a unified list
  keyScreens?: KeyScreen[]; 
  gallery?: GalleryItem[];

  // Features
  features?: FeatureItem[];
  
  // Tech Highlights
  techHighlights?: Array<{ title?: string; description: string }>;

  // Process
  process?: TimelineStep[];
  
  // Outcome
  outcome: {
    results: string;
    learnings: string[];
    scores?: Array<{ label: string; value: number }>;
  };

  // Next Steps
  nextSteps?: Array<{ description: string }>;
  
  // Navigation
  prevProject?: { name: string; url: string };
  nextProject?: { name: string; url: string };
};

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({
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
  contribution,
  links,
  summary,
  keyScreens,
  gallery,
  features,
  process,
  outcome,
  challenges,
  techHighlights,
  nextSteps,
  prevProject,
  nextProject,
  howItWorks,
  roadmap,
}) => {

  // Merge legacy KeyScreens and Gallery into one list for UnifiedGallery
  const unifiedGalleryItems: GalleryItem[] = [
    ...(keyScreens?.map(k => ({
      id: `ks-${k.title}`,
      src: k.src,
      alt: k.alt,
      title: k.title,
      caption: k.caption,
      type: 'UI Screenshot' as const
    })) || []),
    ...(gallery || [])
  ];

  // Define TOC Items based on available content
  const tocItems = [
    { id: 'summary', label: COPY.TOC.LABELS.SUMMARY },
    ...(howItWorks ? [{ id: 'how-it-works', label: howItWorks.title }] : []),
    ...(roadmap ? [{ id: 'roadmap', label: COPY.TOC.LABELS.ROADMAP }] : []),
    ...(challenges && challenges.length > 0 ? [{ id: 'challenges', label: COPY.TOC.LABELS.CHALLENGES }] : []),
    ...(unifiedGalleryItems.length > 0 ? [{ id: 'gallery', label: COPY.TOC.LABELS.GALLERY }] : []),
    ...(features && features.length > 0 ? [{ id: 'features', label: COPY.TOC.LABELS.FEATURES }] : []),
    ...(techHighlights && techHighlights.length > 0 ? [{ id: 'tech', label: COPY.TOC.LABELS.TECH }] : []),
    ...(process && process.length > 0 ? [{ id: 'process', label: COPY.TOC.LABELS.PROCESS }] : []),
    { id: 'outcome', label: COPY.TOC.LABELS.OUTCOME },
    ...(nextSteps && nextSteps.length > 0 ? [{ id: 'next-steps', label: COPY.TOC.LABELS.NEXT_STEPS }] : []),
  ];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background text-slate-50 font-sans text-lg selection:bg-emerald-500/30">
      
      <main>
        <Container className="py-24 sm:py-32 space-y-20">
        
        {/* Navigation & Header - Integrated Breadcrumb style */}
        <div className="flex flex-col gap-6">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors w-fit group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {COPY.BREADCRUMB.BACK_TO_PROJECTS}
          </a>
          
          <ProjectHero
            name={name}
            subtitle={subtitle}
            status={status}
            coverImage={coverImage}
            projectType={projectType}
            role={role}
            period={period}
            tools={tools}
            metrics={metrics}
            liveUrl={liveUrl}
            githubUrl={githubUrl}
            contribution={contribution}
            links={links}
          />
        </div>

        {/* Main Content Grid with TOC */}
        <div className="flex flex-col xl:flex-row gap-16 relative">
          
          {/* Left Column: Content (w-full xl:flex-1) */}
          <div className="w-full xl:flex-1 space-y-24 min-w-0">
            
            {/* Summary */}
            <section id="summary" className="scroll-mt-32">
              <SummaryCard
                problem={summary.problem}
                solution={summary.solution}
                impact={summary.impact}
              />
            </section>

            {/* How It Works */}
            {howItWorks && (
              <section id="how-it-works" className="scroll-mt-32 space-y-8">
                <h2 className="text-2xl font-bold text-slate-100">{howItWorks.title}</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {howItWorks.steps.map((step, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 relative">
                      <div className="absolute top-4 right-4 text-emerald-500/20 text-4xl font-bold">{idx + 1}</div>
                      <div className="text-emerald-400 mb-3 text-2xl">{step.icon}</div>
                      <h3 className="font-bold text-slate-200 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed max-w-[90%]">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Roadmap */}
            {roadmap && (
              <section id="roadmap" className="scroll-mt-32 space-y-8">
                 <h2 className="text-2xl font-bold text-slate-100">{roadmap.title}</h2>
                 <div className="grid md:grid-cols-2 gap-6">
                   {/* NOW */}
                   <div className="bg-slate-900/40 p-6 rounded-2xl border border-emerald-500/30 shadow-[0_4px_20px_rgba(16,185,129,0.05)]">
                     <h3 className="text-emerald-400 font-bold mb-5 flex items-center gap-3 text-lg border-b border-emerald-500/20 pb-2">
                       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 text-sm">Now</span>
                       <span className="text-slate-300 text-sm font-normal">現在の実装機能</span>
                     </h3>
                     <ul className="space-y-3">
                       {roadmap.items.filter(i => i.status === 'now').map((i, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-slate-300 group">
                           <span className="text-emerald-500 mt-0.5 group-hover:scale-125 transition-transform">✓</span>
                           {i.label}
                         </li>
                       ))}
                     </ul>
                   </div>
                   
                   {/* NEXT */}
                   <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50 border-dashed">
                     <h3 className="text-indigo-400 font-bold mb-5 flex items-center gap-3 text-lg border-b border-indigo-500/20 pb-2">
                       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 text-sm">Next</span>
                       <span className="text-slate-400 text-sm font-normal">今後のアップデート</span>
                     </h3>
                     <ul className="space-y-3">
                        {roadmap.items.filter(i => i.status === 'next').map((i, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-slate-400">
                            <span className="text-indigo-500/50 mt-1 text-[10px]">•</span>
                            {i.label}
                         </li>
                        ))}
                     </ul>
                   </div>
                 </div>
              </section>
            )}

            {/* Challenges */}
            {challenges && challenges.length > 0 && (
              <section id="challenges" className="scroll-mt-32 space-y-6">
                <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                  <span className="w-1 h-6 bg-neon-orange rounded-full"></span>
                  {COPY.TOC.LABELS.CHALLENGES}
                </h2>
                <ContentListSection type="challenges" items={challenges} />
              </section>
            )}

            {/* Unified Gallery */}
            {unifiedGalleryItems.length > 0 && (
              <section id="gallery" className="scroll-mt-32 space-y-8">
                <h2 className="text-2xl font-bold text-slate-100">{COPY.TOC.LABELS.GALLERY}</h2>
                <UnifiedGallery items={unifiedGalleryItems} />
              </section>
            )}

            {/* Features */}
            {features && features.length > 0 && (
              <section id="features" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-slate-100 mb-8">{COPY.TOC.LABELS.FEATURES}</h2>
                 <FeatureWalkthrough features={features} />
              </section>
            )}

            {/* Tech Highlights */}
            {techHighlights && techHighlights.length > 0 && (
              <section id="tech" className="scroll-mt-32 space-y-6">
                 <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                  <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                  {COPY.TOC.LABELS.TECH}
                </h2>
                <ContentListSection type="highlights" items={techHighlights} />
              </section>
            )}

            {/* Process */}
            {process && process.length > 0 && (
              <section id="process" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-slate-100 mb-8">{COPY.TOC.LABELS.PROCESS}</h2>
                <TimelineProcess steps={process} />
              </section>
            )}

            {/* Outcome */}
            <section id="outcome" className="scroll-mt-32">
              <OutcomeSection
                results={outcome.results}
                learnings={outcome.learnings}
                scores={outcome.scores}
              />
            </section>

            {/* Next Steps */}
            {nextSteps && nextSteps.length > 0 && (
              <section id="next-steps" className="scroll-mt-32 space-y-6 pt-8 border-t border-slate-800">
                <h2 className="text-xl font-bold text-slate-200 flex items-center gap-3">
                  <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
                  {COPY.TOC.LABELS.NEXT_STEPS}
                </h2>
                <ContentListSection type="next-steps" items={nextSteps} />
              </section>
            )}

            {/* Final CTA */}
            <div className="pt-12 border-t border-slate-800 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <ProjectLinks links={links || { demo: liveUrl, github: githubUrl }} />
              <a 
                href="/#contact" 
                className="w-full sm:w-auto px-8 py-3 text-slate-400 font-medium hover:text-emerald-400 transition text-center"
              >
                {COPY.BUTTONS.CONTACT}
              </a>
            </div>

          </div>

          {/* Right Column: Sticky TOC */}
          <TableOfContents items={tocItems} />
          
        </div>

        {/* Navigation */}
        <div className="pt-16 border-t border-slate-800">
          <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
        </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailLayout;
