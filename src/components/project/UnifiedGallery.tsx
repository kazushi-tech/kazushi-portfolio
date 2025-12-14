import React, { useState, useEffect, useCallback } from 'react';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  type?: 'UI Screenshot' | 'Concept Visual' | 'Feature';
}

interface UnifiedGalleryProps {
  items: GalleryItem[];
}

const UnifiedGallery: React.FC<UnifiedGalleryProps> = ({ items }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  if (items.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`group relative cursor-zoom-in overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/20 transition-all hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]
              ${index === items.length - 1 && items.length % 2 !== 0 ? 'md:col-span-2 md:aspect-[21/9]' : 'aspect-video'}
            `}
            onClick={() => openLightbox(index)}
          >
            <img 
              src={item.src} 
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Label (Top Right) */}
            {item.type && (
              <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-block rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-300 backdrop-blur-sm border border-slate-700/50">
                  {item.type}
                </span>
              </div>
            )}

            {/* Caption (Bottom Left) */}
            <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h4 className="text-sm font-semibold text-white drop-shadow-md">{item.title || item.alt}</h4>
              {item.caption && (
                <p className="mt-0.5 text-xs text-slate-300 line-clamp-1 drop-shadow-md">{item.caption}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 rounded-full bg-slate-800/50 p-2 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons (Desktop) */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-full bg-slate-800/50 p-3 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white md:block focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-full bg-slate-800/50 p-3 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white md:block focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Content Area */}
          <div 
            className="relative h-full w-full max-w-6xl flex flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full flex items-center justify-center overflow-hidden rounded-sm">
               <img 
                 key={items[currentIndex].src} // Force re-render for animation if needed, or remove for smooth replace
                 src={items[currentIndex].src} 
                 alt={items[currentIndex].alt}
                 className="max-h-[85vh] max-w-full object-contain shadow-2xl"
               />
            </div>
            
            {/* Caption in Lightbox */}
            <div className="text-center">
               <h3 className="text-lg font-medium text-white">
                 {items[currentIndex].title} 
                 <span className="ml-3 text-sm font-normal text-slate-400">
                   ({currentIndex + 1} / {items.length})
                 </span>
               </h3>
               {items[currentIndex].caption && (
                 <p className="mt-1 text-sm text-slate-400 max-w-prose mx-auto">{items[currentIndex].caption}</p>
               )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UnifiedGallery;
