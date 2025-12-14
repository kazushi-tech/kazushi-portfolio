import React from 'react';
import { COPY } from '../../constants/copy';

type ScoreItem = {
  label: string;
  value: number;
};

type OutcomeSectionProps = {
  results: string;
  learnings: string[];
  scores?: ScoreItem[];
};

export const OutcomeSection: React.FC<OutcomeSectionProps> = ({
  results,
  learnings,
  scores,
}) => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-50 border-b border-slate-700/50 pb-4">
        {COPY.OUTCOME.TITLE}
      </h2>

      {/* Scores */}
      {scores && scores.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {scores.map((score, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="relative flex items-center justify-center w-16 h-16 mb-2">
                 <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className={score.value >= 90 ? "text-emerald-500" : score.value >= 50 ? "text-amber-500" : "text-red-500"}
                      strokeDasharray={`${score.value}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                 </svg>
                 <span className={`absolute text-lg font-bold ${score.value >= 90 ? "text-emerald-400" : "text-slate-200"}`}>
                   {score.value}
                 </span>
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">{score.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/60">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-400 mb-3">{COPY.OUTCOME.RESULTS}</h3>
          <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-wrap">{results}</p>
        </div>
        {learnings.length > 0 && (
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-400 mb-4">{COPY.OUTCOME.LEARNINGS}</h3>
            <ul className="space-y-3">
              {learnings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg text-slate-300 leading-relaxed">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default OutcomeSection;
