import React from 'react';
import { ExternalLinkButton } from './ExternalLinkButton';

type ProjectLinksProps = {
  links?: {
    demo?: string;
    github?: string;
    docs?: string;
    sample?: string;
  };
  className?: string;
};

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ links, className = '' }) => {
  if (!links) return null;

  const { demo, github, docs, sample } = links;
  // If no demo, GitHub becomes the primary call to action
  const promoteGithub = !demo;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* Primary Actions */}
      {demo && (
        <ExternalLinkButton
          href={demo}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-[0_0_15px_rgba(52,211,153,0.3)]"
        >
          Use App
          <span aria-hidden>↗</span>
        </ExternalLinkButton>
      )}
      {github && (
        <ExternalLinkButton
          href={github}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
            promoteGithub
              ? 'bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
              : 'border border-slate-600 bg-slate-800/50 text-slate-200 hover:bg-slate-700/50'
          }`}
        >
          GitHub
          <span aria-hidden>↗</span>
        </ExternalLinkButton>
      )}

      {/* Secondary Actions */}
      {(docs || sample) && (
        <div className="flex items-center gap-3 pl-2 border-l border-slate-700/50 ml-1">
          {docs && (
            <ExternalLinkButton
              href={docs}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Docs
            </ExternalLinkButton>
          )}
          {sample && (
            <ExternalLinkButton
              href={sample}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Sample Output
            </ExternalLinkButton>
          )}
        </div>
      )}
    </div>
  );
};
