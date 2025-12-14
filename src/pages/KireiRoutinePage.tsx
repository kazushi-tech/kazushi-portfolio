// Imports cleaned up

import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { kireiRoutineImages } from '../data/projectImages';
import { projects } from '../data/projects';

// Import local assets for specific sections
import lifeRoutineHubBright from '../assets/projects/concept-visuals/life-routine-hub-bright.png';
import responsiveDashboard from '../assets/projects/concept-visuals/responsive-dashboard-multi-device.jpeg';
import kireiroutineThumb from '../assets/projects/kireiroutine-thumb.png';

const KireiRoutinePage: React.FC = () => {
  const projectData = projects.find(p => p.id === 'kireiroutine');

  useDocumentHead({
    title: 'KireiRoutine - 掃除ルーティン管理PWA',
    description: '個人の掃除ルーティンを「見える化」して続けやすくするPWA。',
  });

  return (
    <ProjectDetailLayout
      name="KireiRoutine"
      subtitle="掃除ルーティン管理PWA"
      status="completed"
      coverImage={{
        src: kireiRoutineImages.dashboard,
        alt: 'KireiRoutine Dashboard',
      }}
      projectType="Personal PWA"
      role="Design & Dev"
      period="2024–2025"
      tools={['React', 'TypeScript', 'Tailwind', 'Recoil', 'Workbox']}
      
      metrics={[
        { label: 'Target', value: 'Personal Use' },
        { label: 'Performance', value: '98 (Lighthouse)' },
        { label: 'Platform', value: 'PWA / Mobile' },
      ]}

      liveUrl={projectData?.link}
      githubUrl={projectData?.githubUrl}

      summary={{
        problem: '「前回いつやった？」の記憶依存管理では、換気扇や排水溝など低頻度タスクの抜け漏れが常態化。',
        solution: '頻度（例：3日毎）設定から次回予定日を自動算出する、カレンダーベースのタスク管理エンジン。',
        impact: '週次・月次の不定期タスクも完全自動化。1年間の運用で「やり忘れ」によるストレスがゼロに。',
      }}

      challenges={[
        { description: 'カレンダーとタスクリストの状態同期ロジック（Recoilで一元管理し整合性を担保）。' },
        { description: '「毎日1秒で記録」を実現するためのUI設計と、Workboxによるオフライン動作。' },
      ]}

      techHighlights={[
        { title: 'Offline First', description: 'Service Worker (Workbox) で、地下鉄でも使える「完全オフライン対応」を実現。' },
        { title: 'Local Persistence', description: 'Recoil-persist (localStorage) でデータを即時保存。サーバーレスで個人データを永続化。' },
      ]}

      nextSteps={[
        { description: 'Push通知 APIによる「掃除リマインド」の自動化。' },
        { description: '実績ヒートマップの実装（GitHub草のような習慣ログ）。' },
      ]}

      // Gallery: Using best available "Real-feel" assets
      gallery={[
        {
          id: 'dashboard',
          src: kireiRoutineImages.dashboard,
          alt: 'Dashboard UI',
          title: 'Main Dashboard',
          caption: '「今日やる」タスクのみ表示。ワンタップで完了。',
          type: 'UI Screenshot',
        },
        {
          id: 'calendar',
          src: '/images/kireiroutine/real-calendar-ui.png',
          alt: 'Calendar View',
          title: 'Real Calendar Schedule',
          caption: '実際のアプリ画面：月次で予定を俯瞰。緑ドットは完了実績。',
          type: 'UI Screenshot',
        },
        {
          id: 'responsive',
          src: responsiveDashboard,
          alt: 'Multi-device Support',
          title: 'Responsive PWA',
          caption: 'スマホ、タブレット、PC全てで最適化。',
          type: 'UI Screenshot',
        },
      ]}

      features={[
        {
          title: 'Smart Scheduling',
          description: '「3日ごと」「毎週火曜」などの頻度設定に基づき、次回予定日を自動計算。',
          bullets: [
            '次回予定の自動算出',
            '柔軟な頻度設定',
            '期限切れアラート',
          ],
          image: {
            src: kireiRoutineImages.dashboard,
            alt: 'Settings UI',
          },
        },
        {
          title: 'Visual Calendar',
          description: 'いつ掃除したか、次はいつか。全てをカレンダー上で可視化。',
          bullets: [
            '実績ログの可視化',
            '予定のドラッグ調整',
            '月次サマリー',
          ],
          image: {
            src: lifeRoutineHubBright,
            alt: 'Calendar UI',
          },
        },
      ]}
      
      process={[
        {
          step: 'Definition',
          description: '「記憶しない」「開くストレスゼロ」をコア価値に設定。',
        },
        {
          step: 'Dev & Dogfooding',
          description: 'React/Recoilで実装し、自ら毎日使いながら改善（1年間）。',
        },
        {
          step: 'Polish',
          description: '機能過多を削ぎ落とし、掃除に特化したシンプルUIへ昇華。',
        },
      ]}
      
      outcome={{
        results: '生活に完全に定着。「家事の管理」という認知コスト自体を消滅させた。',
        learnings: [
          '自分自身がヘビーユーザーになる開発（Dogfooding）こそ、最強の品質保証。',
          'PWAの「インストールして使う」体験は、継続率に直結する。',
        ],
      }}
      
      prevProject={{ name: 'Concept Visuals', url: '/projects/concept-visuals' }}
      nextProject={{ name: "Urban Grind", url: '/projects/urban-grind' }}
    />
  );
};

export default KireiRoutinePage;
