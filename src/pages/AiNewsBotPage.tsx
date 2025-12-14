import React from 'react';
import ProjectDetailLayout from '../components/ProjectDetailLayout';
import { useDocumentHead } from '../hooks/useDocumentHead';

// Import images
import aiNewsBotThumb from '../assets/projects/ai-news-bot-thumb.png';
import aiNewsCommandCenter from '../assets/projects/concept-visuals/ai-news-command-center-bright.jpeg';
import aiNewsDataStream from '../assets/projects/concept-visuals/ai-news-data-stream.jpeg';
import kzWorkspaceDesk from '../assets/projects/concept-visuals/kz-workspace-night-desk.jpeg';


const AiNewsBotPage: React.FC = () => {
  useDocumentHead({
    title: 'AI News Bot - ニュース自動要約パイプライン',
    description: 'AIニュースを自動要約し、Obsidianに整理・保存するパイプライン。Node.js × TypeScript × Gemini API で構築。',
  });

  return (
    <ProjectDetailLayout
      name="AI News Bot"
      subtitle="ニュース自動要約パイプライン"
      status="in-progress"
      coverImage={{
        src: aiNewsBotThumb,
        alt: 'AI News Bot コンセプト',
      }}
      projectType="Automation / CLI tool"
      role="Architect, Backend Engineer"
      period="2024–2025"
      tools={['Node.js', 'TypeScript', 'Gemini API', 'Markdown', 'Obsidian']}
      links={{
        github: "https://github.com/kazushi-tech/ai-news-bot",
        docs: "https://github.com/kazushi-tech/ai-news-bot#readme",
        sample: "https://github.com/kazushi-tech/ai-news-bot/blob/main/samples/output.md",
      }}
      metrics={[
        { label: 'Status', value: '開発中' },
        { label: 'Sources', value: '5+' },
        { label: 'Notes', value: '自動生成' },
      ]}
      summary={{
        problem: '毎日のAIニュース収集が手動では続かない、情報が整理されない',
        solution: 'Gemini APIで自動要約し、Obsidianに構造化ノートとして保存',
        impact: 'ニュースチェック時間を削減、ナレッジベースとして蓄積中',
      }}
      
      howItWorks={{
        title: 'How It Works',
        steps: [
          { title: 'Source Input', description: 'TechニュースサイトやRSSフィードからURLリストを投入', icon: '🔗' },
          { title: 'Extraction', description: 'Cheerio/Puppeteerで記事本文を抽出し、広告・ノイズを除去', icon: '🧹' },
          { title: 'Summarization', description: 'Gemini API (Flash 1.5) にプロンプトと共に送信し要約生成', icon: '🤖' },
          { title: 'Archiving', description: 'Frontmatter付きMarkdownとして保存し、Vaultのインデックスを更新', icon: '📦' },
        ]
      }}

      roadmap={{
        title: 'Development Roadmap',
        items: [
          { label: 'CLIベースのニュース取得・要約', status: 'now' },
          { label: 'Gemini API プロンプト最適化', status: 'now' },
          { label: 'Obsidian用Markdown出力', status: 'now' },
          { label: 'Web UI (Dashboard) の実装', status: 'next' },
          { label: 'Slack / Discord 通知連携', status: 'next' },
          { label: '過去記事のベクトル検索・Q&A機能', status: 'next' },
        ]
      }}

      features={[
        {
          title: 'Gemini API 自動要約',
          description: '記事本文をGemini APIで自動要約。プロンプト設計で品質調整。',
          bullets: [
            'LLMによる高精度な要約',
            'カスタムプロンプトで出力調整',
            '複数記事の一括処理',
          ],
          image: {
            src: aiNewsCommandCenter,
            alt: 'Gemini API',
          },
        },
        {
          title: 'Obsidian連携',
          description: 'Markdown形式で保存、日次・ドメイン別インデックスを自動生成。',
          bullets: [
            'Obsidian Vault に直接保存',
            '日次インデックス自動生成',
            'ドメイン（AI/ML/LLM）分類',
          ],
          image: {
            src: aiNewsDataStream,
            alt: 'Obsidian連携',
          },
        },
      ]}
      
      outcome={{
        results: '開発中。ニュース収集→要約→保存のパイプラインは動作。Publish機能やWeb UIを今後検討。',
        learnings: [
          'Gemini APIのプロンプト設計が要約品質を左右する',
          'Obsidianとの連携でナレッジベースとして活用しやすい',
          'CLIツールはcron/タスクスケジューラと連携しやすい',
        ],
      }}
      gallery={[
        {
          id: 'thumb',
          src: aiNewsBotThumb,
          alt: 'サムネイル',
          title: 'Project Thumbnail',
          caption: 'プロジェクトサムネイル',
        },
        {
          id: 'workspace',
          src: kzWorkspaceDesk,
          alt: 'ワークスペース',
          title: 'Workspace',
          caption: '開発環境',
        },
      ]}
      prevProject={{ name: "Urban Grind", url: '/projects/urban-grind' }}
      nextProject={{ name: 'Concept Visuals', url: '/projects/concept-visuals' }}
    />
  );
};

export default AiNewsBotPage;
