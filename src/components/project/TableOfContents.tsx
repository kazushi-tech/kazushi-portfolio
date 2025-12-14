import React, { useEffect, useState } from 'react';
import { COPY } from '../../constants/copy';

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Sticky TOC */}
      <nav className="hidden xl:block sticky top-32 self-start w-64 pl-8 border-l border-slate-800">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
          {COPY.TOC.TITLE}
        </h4>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`text-sm transition-all duration-200 block border-l-2 pl-3 -ml-[33px] ${
                  activeId === item.id
                    ? 'border-emerald-500 text-emerald-400 font-medium'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-8 text-xs text-slate-500 hover:text-emerald-400 flex items-center gap-1 transition-colors"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {COPY.BUTTONS.BACK_TO_TOP}
        </button>
      </nav>

      {/* Mobile Collapsible TOC (Bottom Sheet style or simple details) */}
      <div className="xl:hidden mb-8 border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden">
        <details className="group">
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none text-sm font-medium text-slate-300 hover:text-white transition-colors">
            <span>{COPY.TOC.TITLE}</span>
            <span className="transition-transform group-open:rotate-180">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <nav className="px-4 pb-4 border-t border-slate-800/50 pt-2">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      handleClick(e, item.id);
                      // Close details on click (optional, requires ref/state or simple DOM hack)
                      const details = e.currentTarget.closest('details');
                      if (details) details.open = false;
                    }}
                    className={`block py-1 text-sm ${
                      activeId === item.id ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </>
  );
};

export default TableOfContents;
