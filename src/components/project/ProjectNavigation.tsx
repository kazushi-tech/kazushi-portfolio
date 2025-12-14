import React from 'react';
import { Link } from 'react-router-dom';
import { COPY } from '../../constants/copy';

type ProjectNavigationProps = {
  prevProject?: {
    name: string;
    url: string;
  };
  nextProject?: {
    name: string;
    url: string;
  };
};

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  prevProject,
  nextProject,
}) => {
  return (
    <div className="pt-10 border-t border-slate-800/50 space-y-8">
      {/* Prev / Next in one row */}
      {(prevProject || nextProject) && (
        <div className="flex justify-between items-center gap-4">
          {prevProject ? (
            <Link
              to={prevProject.url}
              className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                ←
              </span>
              <div className="text-left">
                <p className="text-[10px] text-slate-500">PREVIOUS</p>
                <p className="text-sm font-medium">{prevProject.name}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {nextProject ? (
            <Link
              to={nextProject.url}
              className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors group text-right"
            >
              <div>
                <p className="text-[10px] text-slate-500">NEXT</p>
                <p className="text-sm font-medium">{nextProject.name}</p>
              </div>
              <span className="w-10 h-10 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                →
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}

      {/* Back to projects */}
      <div className="flex justify-center">
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-slate-700/50 hover:bg-slate-800/50 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
        >
          {COPY.BREADCRUMB.BACK_TO_PROJECTS}
        </Link>
      </div>
    </div>
  );
};

export default ProjectNavigation;
