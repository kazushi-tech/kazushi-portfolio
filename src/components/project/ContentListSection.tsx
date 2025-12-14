import React from 'react';

type SectionType = 'challenges' | 'highlights' | 'next-steps';

interface ContentListProps {
  type: SectionType;
  items: Array<{
    title?: string;
    description: string;
  }>;
}

const ContentListSection: React.FC<ContentListProps> = ({ type, items }) => {
  if (!items || items.length === 0) return null;

  // Configuration based on type
  const config = {
    challenges: {
      icon: (
        <svg className="w-5 h-5 text-neon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      markerColor: 'bg-neon-orange',
      textColor: 'text-slate-300',
    },
    highlights: {
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      markerColor: 'bg-emerald-500',
      textColor: 'text-slate-300',
    },
    'next-steps': {
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      ),
      markerColor: 'bg-blue-500',
      textColor: 'text-slate-400',
    }
  };

  const { icon, markerColor, textColor } = config[type];

  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="relative pl-6 sm:pl-0 sm:flex sm:gap-4 group">
          {/* Mobile Marker */}
          <span className={`absolute left-0 top-2.5 w-2 h-2 rounded-full sm:hidden ${markerColor}`} />
          
          {/* Desktop Icon */}
          <div className="hidden sm:flex flex-shrink-0 mt-1 w-8 h-8 items-center justify-center rounded-lg bg-slate-800/50 group-hover:bg-slate-800 transition-colors">
            {icon}
          </div>

          <div className="flex-1">
            {item.title && (
              <h4 className="font-semibold text-slate-200 mb-1 leading-snug">
                {item.title}
              </h4>
            )}
            <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContentListSection;
