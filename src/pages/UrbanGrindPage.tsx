import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { projects } from '../data/projects';
import { COPY } from '../constants/copy';

const UrbanGrindPage: React.FC = () => {
  const project = projects.find(p => p.id === 'urban-grind-tokyo');

  useDocumentHead({
    title: "Kazushi's Urban Grind - 都市の隠れ家カフェ",
    description: '「もし自分がカフェを開くなら」を形にしたコンセプトサイト。Vite × React × TailwindCSS で構築。',
  });

  if (!project) return <div>Project not found</div>;

  return (
    <ProjectDetailLayout
      name={project.name}
      subtitle="都市の隠れ家カフェ"
      status="completed"
      coverImage={{
        src: '/images/urban-grind/hero-cafe-interior.webp',
        alt: 'Urban Grind Cafe Interior',
      }}
      projectType={COPY.HERO.VALUES.CONCEPT_SITE}
      role={COPY.HERO.VALUES.DESIGN_DEV}
      period="2024"
      tools={['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']}
      metrics={[
        { label: COPY.HERO.METRICS.LIGHTHOUSE, value: '98+' },
        { label: COPY.HERO.METRICS.PAGES, value: '1' },
        { label: COPY.HERO.METRICS.RESPONSIVE, value: '100%' },
      ]}
      liveUrl={project.link}
      githubUrl={project.githubUrl}
      
      contribution={[
        'UIデザイン & コンセプト設計',
        'React + TypeScript 実装',
        'パフォーマンスチューニング (WebP/Lazy Load)',
      ]}

      summary={{
        problem: '多くのカフェサイトは情報過多で、店舗が持つ本来の「静寂な空気感」や「上質さ」がWeb上では伝わりにくいという課題がありました。',
        solution: '情報を削ぎ落としたミニマルなデザインと、スクロールに合わせてゆったりとコンテンツが現れるインタラクションを採用し、店舗の空気感を再現しました。',
        impact: 'ブランドの世界観を損なうことなく、かつメニューやアクセスなどの重要情報へ直感的に辿り着ける、没入感と実用性を兼ね備えたサイトを実現しました。Lighthouse Performance 98点 / Accessibility 100点を達成。',
      }}

      challenges={[
        { description: '世界観とユーザビリティの両立: 画像主体の構成にしつつ、固定ヘッダーと直感的なナビゲーションで、ユーザーを迷子にさせない設計を徹底しました。' },
        { description: 'パフォーマンスと高画質のバランス: 雰囲気を伝えるために高解像度画像を使用しましたが、徹底的なWebP化と遅延読み込みにより、Lighthouse Performance 98点を維持しました。' },
      ]}

      // Gallery (Unified)
      gallery={[
        {
          id: 'hero',
          src: '/images/urban-grind/hero-cafe-interior.webp',
          alt: 'Hero Section',
          title: 'Hero / First Impression',
          caption: '没入感を高めるファーストビュー (Desktop)',
          type: 'UI Screenshot',
        },
        {
          id: 'menu',
          src: '/images/urban-grind/real-menu-ui.png',
          alt: 'Real Menu Page',
          title: 'Dynamic Menu Page',
          caption: '実際のサイト：カテゴリ切り替えとスムーズなアニメーション',
          type: 'UI Screenshot',
        },
        {
          id: 'gallery-ui',
          src: '/images/urban-grind/real-gallery-ui.png',
          alt: 'Gallery Page UI',
          title: 'Masonry Gallery UI',
          caption: '実際のサイト：Masonryレイアウトによる写真ギャラリー',
          type: 'UI Screenshot',
        },
        {
          id: 'brewing',
          src: '/images/urban-grind/hand-drip-brewing.png',
          alt: 'Hand Drip Brewing',
          title: 'Hand Drip Process',
          caption: '一杯ずつ丁寧に淹れるハンドドリップの様子',
          type: 'UI Screenshot',
        },
      ]}

      features={[
        {
          title: '没入感を生むHeroセクション',
          description: 'ファーストビューで店舗の空気感を一瞬で伝える全画面ビジュアルを採用。スクロールを促す控えめなアニメーションで、ユーザーを自然にコンテンツへ誘導します。',
          bullets: [
            '全画面の高品質な空間ビジュアル',
            'スクロールを促すマイクロインタラクション',
            'ノイズを排除したUIデザイン'
          ]
        },
        {
          title: '直感的なメニュー閲覧',
          description: 'カテゴリ（Coffee, Food, Sweets）の切り替えをスムーズなトランジションで実装。ストレスなくメニューを閲覧でき、選ぶ楽しさを演出しています。',
          bullets: [
            'タブ切り替えによるスムーズな遷移',
            '美味しさを引き立てる画像の配置',
            '価格と説明の可読性確保'
          ]
        },
        {
          title: '店舗の空気感を伝えるギャラリー',
          description: '画一的なグリッドではなく、あえてリズムを持たせたレイアウトで写真を配置。店内の「散策」を楽しむような閲覧体験を提供します。',
          bullets: [
            'Masonryレイアウトによるリズム感',
            'クリックで拡大できるLightbox',
            'スマホでも崩れないレスポンシブ対応'
          ]
        },
      ]}

      techHighlights={[
        { title: 'コンポーネント指向設計', description: 'Atomic Designを意識し、ボタンやカードなどのUIパーツを再利用可能な粒度で分割。将来的なページ追加にも柔軟に対応できる設計です。' },
        { title: 'Framer Motionによる演出', description: '「静寂」を表現するため、派手な動きは避け、opacityとy軸移動のみのシンプルな出現アニメーションで統一しています。' },
      ]}

      process={[
        { step: '競合調査 & コンセプト立案', description: '「隠れ家」「上質」をキーワードにムードボードを作成。既存のカフェサイトとの差別化ポイントを明確化しました。' },
        { step: 'FigmaによるUIデザイン', description: '余白の取り方やフォント選定（Noto Serif JP）にこだわり、プロトタイプを作成して動線を確認しました。' },
        { step: 'Vite + React実装', description: 'パフォーマンスを最優先に構成。画像最適化とバンドルサイズ削減を意識しながらコーディングを行いました。' },
      ]}

      outcome={{
        results: 'Lighthouse Performance 98点、Accessibility 100点を達成。\nビジュアル重視のサイトでありながら、ストレスのない高速な読み込み体験を実現しました。',
        learnings: [
          '画像の遅延読み込み（Lazy Loading）がUX指標に与える影響の再確認',
          'ブランドイメージを体現するためのフォント選びと、それを支える余白の重要性',
          'ユーザビリティを犠牲にしないミニマルデザインのバランス感覚',
        ],
        scores: [
          { label: COPY.OUTCOME.SCORES.PERFORMANCE, value: 98 },
          { label: COPY.OUTCOME.SCORES.ACCESSIBILITY, value: 100 },
          { label: COPY.OUTCOME.SCORES.BEST_PRACTICES, value: 100 },
          { label: COPY.OUTCOME.SCORES.SEO, value: 100 },
        ]
      }}

      nextSteps={[
        { description: '予約システムの統合: 外部サービス遷移ではなく、サイト内で完結するシンプルな予約フォームの実装' },
        { description: 'CMS導入: オーナー自身が季節のメニューやお知らせを更新できる仕組み（MicroCMS等）の構築' },
      ]}
      
      prevProject={{ name: 'KireiRoutine', url: '/projects/kirei-routine' }}
      nextProject={{ name: 'KireiRoutine', url: '/projects/kirei-routine' }}
    />
  );
};

export default UrbanGrindPage;
