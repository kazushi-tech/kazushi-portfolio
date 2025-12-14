import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import Container from '../components/Container';

import lifeRoutineHubBright from '../assets/projects/concept-visuals/life-routine-hub-bright.png';
import kireiroutineDashboardAltBright from '../assets/projects/concept-visuals/kireiroutine-dashboard-alt-bright.png';
import aiNewsCommandCenter from '../assets/projects/concept-visuals/ai-news-command-center-bright.jpeg';
import aiNewsDataStream from '../assets/projects/concept-visuals/ai-news-data-stream.jpeg';
import kzIdentityCore from '../assets/projects/concept-visuals/portfolio-symbol.jpg';
import urbanGrindDessertHero from '../assets/projects/concept-visuals/urban-grind-dessert-hero.jpeg';
import urbanGrindNightExterior from '../assets/projects/concept-visuals/concept-visuals-urban-night-city.jpg';
import kzWorkspaceNightDesk from '../assets/projects/concept-visuals/kz-workspace-night-desk.jpeg';
import responsiveDashboardMulti from '../assets/projects/concept-visuals/responsive-dashboard-multi-device.jpeg';
import realMenuUi from '../assets/projects/concept-visuals/real-menu-ui.png';
import realGalleryUi from '../assets/projects/concept-visuals/real-gallery-ui.png';
import realCalendarUi from '../assets/projects/concept-visuals/real-calendar-ui.png';

type GalleryItem = {
  id: string;
  title: string;
  concept: string;
  useCase: string;
  category: string;
  style: 'bright' | 'night';
  imageSrc: string;
  imageAlt: string;
  tags: string[];
};

const FILTER_CATEGORIES = [
  'All',
  'KireiRoutine',
  'AI News Bot',
  'Urban Grind',
  'Identity',
  'Other',
] as const;

type FilterCategory = (typeof FILTER_CATEGORIES)[number];

const galleryItems: GalleryItem[] = [
  {
    id: 'urban-grind-real-menu',
    title: 'Urban Grind – Real Menu UI',
    concept: '実際のメニューページUI。カード型レイアウトとフィルタリング機能の実装例。',
    useCase: 'Urban Grind 本番環境のメニュー画面。',
    category: 'Urban Grind',
    style: 'bright',
    imageSrc: realMenuUi,
    imageAlt: 'Urban Grind Menu Page UI',
    tags: ['Real UI', 'Menu', 'Interactive'],
  },
  {
    id: 'urban-grind-gallery',
    title: 'Urban Grind – Gallery Grid',
    concept: 'Masonryレイアウトを採用したフォトギャラリーUI。',
    useCase: 'Urban Grind 本番環境のギャラリーセクション。',
    category: 'Urban Grind',
    style: 'bright',
    imageSrc: realGalleryUi,
    imageAlt: 'Urban Grind Masonry Gallery UI',
    tags: ['Real UI', 'Gallery', 'Masonry'],
  },
  {
    id: 'kireiroutine-calendar',
    title: 'KireiRoutine – Calendar App',
    concept: '掃除スケジュールを管理する実用的なカレンダーUI。',
    useCase: 'KireiRoutine PWAアプリの本番カレンダー画面。',
    category: 'KireiRoutine',
    style: 'bright',
    imageSrc: realCalendarUi,
    imageAlt: 'KireiRoutine Calendar UI',
    tags: ['Real UI', 'Calendar', 'PWA'],
  },
  {
    id: 'life-routine-hub',
    title: 'Life Routine Hub',
    concept: '生活全体を「コントロールパネル」としてビジュアル化したコンセプト。',
    useCase: 'KireiRoutine トップページのヒーローセクション用ビジュアル。',
    category: 'KireiRoutine',
    style: 'bright',
    imageSrc: lifeRoutineHubBright,
    imageAlt: 'Life Routine Hub コンセプトビジュアル',
    tags: ['Dashboard', 'Lifestyle', 'Bright'],
  },
  {
    id: 'kireiroutine-dashboard-alt',
    title: 'KireiRoutine Dashboard (Alt)',
    concept: '掃除タスクをカードとカレンダーで整理したダッシュボードUIコンセプト。',
    useCase: 'KireiRoutine プロジェクト詳細ページのモックアップ。',
    category: 'KireiRoutine',
    style: 'bright',
    imageSrc: kireiroutineDashboardAltBright,
    imageAlt: 'KireiRoutine Dashboard UIコンセプト',
    tags: ['Product UI', 'Bright'],
  },
  {
    id: 'responsive-dashboard-multi',
    title: 'Responsive Dashboard Multi-Device',
    concept: 'マルチデバイスでのレスポンシブ動作を確認するためのモックアップ。',
    useCase: 'KireiRoutine レスポンシブ検証用ビジュアル。',
    category: 'KireiRoutine',
    style: 'bright',
    imageSrc: responsiveDashboardMulti,
    imageAlt: 'Multi-device Dashboard Mockup',
    tags: ['Responsive', 'Mockup', 'Bright'],
  },
  {
    id: 'ai-news-command-center',
    title: 'AI News Command Center',
    concept: '情報収集・分析を行うAIの「指令室」をイメージした明るいUI。',
    useCase: 'Ai News Bot の管理画面コンセプト。',
    category: 'AI News Bot',
    style: 'bright',
    imageSrc: aiNewsCommandCenter,
    imageAlt: 'AI News Command Center (Bright)',
    tags: ['Dashboard', 'AI', 'Bright'],
  },
  {
    id: 'ai-news-data-stream',
    title: 'AI News Data Stream',
    concept: 'サイバーパンクなデータストリームと解析プロセスを可視化。',
    useCase: 'Ai News Bot のデータ処理プロセス紹介用。',
    category: 'AI News Bot',
    style: 'night',
    imageSrc: aiNewsDataStream,
    imageAlt: 'AI News Data Stream Concept',
    tags: ['Cyberpunk', 'Data', 'Night'],
  },
  {
    id: 'urban-grind-dessert-hero',
    title: 'Urban Grind Dessert Hero',
    concept: '夜カフェの落ち着いた雰囲気とデザートのシズル感を表現。',
    useCase: 'Urban Grind サイトの「Night Menu」セクション背景。',
    category: 'Urban Grind',
    style: 'night',
    imageSrc: urbanGrindDessertHero,
    imageAlt: 'Urban Grind デザートヒーロー',
    tags: ['Cafe', 'Hero', 'Night'],
  },
  {
    id: 'urban-grind-night-exterior',
    title: 'Urban Grind Night Exterior',
    concept: 'ネオンサインと暖かい光が漏れるカフェ外観シーン。',
    useCase: 'Urban Grind サイトの背景／サブヒーロー。',
    category: 'Urban Grind',
    style: 'night',
    imageSrc: urbanGrindNightExterior,
    imageAlt: '夜のカフェ外観',
    tags: ['Exterior', 'Neon', 'Night'],
  },
  {
    id: 'kz-identity-core',
    title: 'KZ Identity Core',
    concept: 'KZロゴを中心としたデジタルアイデンティティのコア表現。',
    useCase: 'ポートフォリオ ABOUT やブランド紹介セクション用。',
    category: 'Identity',
    style: 'night',
    imageSrc: kzIdentityCore,
    imageAlt: 'KZ Identity Core',
    tags: ['Identity', 'Abstract', 'Night'],
  },
  {
    id: 'kz-workspace-night-desk',
    title: 'KZ Workspace Night Desk',
    concept: 'クリエイターの夜の作業環境を没入感あるビジュアルで表現。',
    useCase: 'ポートフォリオのフッターやコンタクトセクション背景。',
    category: 'Other',
    style: 'night',
    imageSrc: kzWorkspaceNightDesk,
    imageAlt: 'Night Workspace',
    tags: ['Workspace', 'Setup', 'Night'],
  },
];

const ConceptVisualsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [activeStyle, setActiveStyle] = useState<GalleryItem['style']>('bright');

  useDocumentHead({
    title: 'Concept Visuals – Generative Art Series',
    description:
      'Nano Banana Proを使ったコンセプトビジュアルシリーズ。KireiRoutine、AI News Bot、Urban Grindなど各プロジェクトのキービジュアルをダーク＋ネオンで制作。',
  });

  const filteredItems = React.useMemo(() => {
    return galleryItems.filter((item) => {
      const matchCategory = activeFilter === 'All' || item.category === activeFilter;
      const matchStyle = item.style === activeStyle;
      return matchCategory && matchStyle;
    });
  }, [activeFilter, activeStyle]);

  return (
    <Container className="py-24 space-y-16">
      <div className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-slate-500">
        <Link to="/" className="text-slate-500 hover:text-emerald-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-500">Projects</span>
        <span>/</span>
        <span className="text-emerald-400 font-medium">Concept Visuals</span>
      </div>

      <div className="space-y-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
            Concept Visuals
          </h1>
          <p className="text-base font-medium uppercase tracking-[0.25em] text-emerald-300/80">
            GENERATIVE ART SERIES WITH NANO BANANA PRO
          </p>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            KireiRoutine、AI News Bot、Urban Grind、そして KZ のデジタルアイデンティティ。
            これらのプロジェクトで共通する世界観を、Freepik の Nano Banana Pro を使って
            コンセプトアートとして再構築。
            Bright Mode（昼）と Night Mode（夜）の異なる空気感を表現しています。
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center p-6 rounded-2xl bg-slate-900/50 border border-emerald-500/10 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2">
            {FILTER_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'bg-slate-800/50 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 border border-transparent hover:border-emerald-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex p-1 bg-slate-950 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveStyle('bright')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${
                activeStyle === 'bright'
                  ? 'bg-white text-slate-950 shadow-md'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span>☀️</span> Bright
            </button>
            <button
              onClick={() => setActiveStyle('night')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${
                activeStyle === 'night'
                  ? 'bg-indigo-900 text-white shadow-[0_0_10px_rgba(79,70,229,0.5)]'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span>🌙</span> Night
            </button>
          </div>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                <span
                  className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide backdrop-blur-md border ${
                    item.style === 'bright'
                      ? 'bg-white/90 text-slate-900 border-slate-200'
                      : 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40'
                  }`}
                >
                  {item.style === 'bright' ? '☀️ Bright' : '🌙 Night'}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.concept}</p>
                <p className="text-xs text-slate-400">
                  <span className="font-semibold text-emerald-400">Use case:</span> {item.useCase}
                </p>
                <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-200 border border-slate-600/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">このカテゴリに該当するビジュアルはありません。</p>
          </div>
        )}
      </section>
    </Container>
  );
};

export default ConceptVisualsPage;
