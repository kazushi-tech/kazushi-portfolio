import React from 'react';
import ExperienceCanvas from './ExperienceCanvas';
import Container from './Container';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full min-h-screen py-16 md:py-0 flex items-center justify-center overflow-hidden scroll-mt-24 md:scroll-mt-32">
      
      {/* Background gradient for text readability - Left side */}
      <div 
        className="absolute left-0 top-0 w-1/2 h-full pointer-events-none z-0 hidden md:block"
        style={{
          background: 'linear-gradient(to right, rgba(15, 30, 50, 0.35) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Background 3D overlay */}
      <div className="pointer-events-none absolute inset-y-[-15%] right-[-30%] w-[140vw] max-w-[1700px] h-[120vh] opacity-60 hidden md:block z-0">
        <div className="w-full h-full">
          <ExperienceCanvas />
        </div>
      </div>

      <Container className="h-full grid gap-12 lg:grid-cols-12 lg:gap-x-12 items-center relative z-10 overflow-visible">
        {/* Left Content - Text Zone */}
        <div className="w-full flex flex-col justify-center px-6 lg:px-10 lg:col-span-7 xl:col-span-8 relative z-20">
          <div className="max-w-[46rem] lg:max-w-[720px] xl:max-w-none">
            
            {/* ① 肩書き - label-like */}
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-neon-cyan/80 mt-32 mb-4">
              Webマーケター / AIツール開発
            </p>

            {/* h1 Title - Digital Reality */}
            {/* h1 Title - Value Proposition */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-5 text-slate-50 drop-shadow-md">
              <span className="lg:whitespace-nowrap">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-emerald-400">Outcomes</span>
              </span>
              <br className="hidden lg:block" />
              <span className="lg:whitespace-nowrap">
                with AI & Marketing.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-sm md:text-base font-medium tracking-[0.08em] text-slate-300 uppercase leading-snug mb-8 max-w-[70ch]">
              Webマーケ × フロントエンド × AIオートメーション
            </p>

            {/* サブヘッド - Primary message */}
            <div className="space-y-4 mb-8 max-w-[70ch]">
              <p className="text-[15px] md:text-base text-slate-300 leading-relaxed font-light border-l-2 border-neon-cyan/60 pl-4">
                <span className="block font-medium text-slate-100 mb-1">「めんどうだけど大事なこと」を仕組み化。</span>
                広告運用・LP改善の"数字を見る目"と、AIツールを活用した"実装力"で、
                運用コストを下げながら成果を出すプロダクトを作ります。
              </p>
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
              {/* プライマリボタン: VIEW PROJECTS */}
              <button
                onClick={scrollToProjects}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm md:text-base transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              
              {/* セカンダリボタン: CONTACT */}
              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full bg-slate-800/80 border border-slate-600 text-slate-200 font-medium text-sm md:text-base transition-all duration-200 hover:bg-slate-700 hover:text-white hover:border-slate-500"
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-14 flex flex-col items-center animate-scroll-bounce opacity-75">
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-neon-cyan/70 mb-2">Scroll</span>
              <div className="w-[2px] h-10 bg-gradient-to-b from-neon-cyan/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Zone (expanded) */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-4 h-[70vh]" aria-hidden="true" />
      </Container>

    </section>
  );
};

export default Hero;
