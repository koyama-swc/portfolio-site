import React from 'react';
import Link from 'next/link';
import { FaYoutube, FaHeadphones, FaPen, FaTwitter, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function News() {
  // ニュース一覧
  const allNews = [
    {
      id: 'news1',
      date: '2025年6月1日',
      title: '【初心者向け】Windsurfのおすすめ設定まとめ、noteに公開しました',
      url: 'https://note.com/ri_ra_ta_na/n/n2345678901',
      category: 'note',
      excerpt: 'AIコーディングアシスタント「Windsurf」を最大限活用するための設定方法や使い方のコツを詳しく解説しています。',
    },
    {
      id: 'news2',
      date: '2025年6月2日',
      title: 'イケハヤさんのVibe Codingサロンに入会しました！stand.fmで感想を話しています',
      url: 'https://stand.fm/episodes/683cd04d13f734b7d30b656d',
      category: 'stand.fm',
      excerpt: 'イケハヤさんのVibe Codingサロンに入会してみた感想と、実際に得られた学びについて話しています。',
    },
    {
      id: 'news3',
      date: '2025年5月31日',
      title: 'AIコーディングツール「Windsurf」で「ToDoリスト」を作成しました！',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
      category: 'YouTube',
      excerpt: 'AIコーディングアシスタント「Windsurf」を使って、シンプルなToDoリストアプリを作成する過程を解説しています。',
    },
    {
      id: 'news4',
      date: '2025年5月15日',
      title: 'Google Geminiはここが凄い！ChatGPTやClaudeにはない強みとは？',
      url: 'https://note.com/ri_ra_ta_na/n/n1234567890',
      category: 'note',
      excerpt: 'Google Geminiの特徴や強み、ChatGPTやClaudeとの違いを徹底比較しました。AIツール選びの参考にどうぞ。',
    },
    {
      id: 'news5',
      date: '2025年6月2日',
      title: '活動紹介サイトをリニューアルしました！',
      url: '#',
      category: 'お知らせ',
      excerpt: 'YouTube、stand.fm、note、X（Twitter）の4つのプラットフォームでの活動を紹介するウェブサイトをリニューアルしました。',
    },
    {
      id: 'news6',
      date: '2025年5月25日',
      title: 'ChatGPTとGoogle Geminiを徹底比較！どっちが優秀？新しい動画を公開しました',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
      category: 'YouTube',
      excerpt: 'ChatGPTとGoogle Geminiの機能や性能を様々な角度から比較検証した動画を公開しました。',
    },
    {
      id: 'news7',
      date: '2025年5月18日',
      title: 'Next.js 14の新機能を解説！App Routerの使い方',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
      category: 'YouTube',
      excerpt: 'Next.js 14の新機能、特にApp Routerの基本的な使い方から応用テクニックまでを解説しています。',
    },
    {
      id: 'news8',
      date: '2025年5月18日',
      title: 'フリーランスエンジニアの1日のルーティンをstand.fmで公開しました',
      url: 'https://stand.fm/channels/6649cf88316143a771c72242',
      category: 'stand.fm',
      excerpt: '私がフリーランスエンジニアとして実践している、生産性を高めるための1日のルーティンを紹介しています。',
    },
    {
      id: 'news9',
      date: '2025年5月1日',
      title: 'Next.js 14で作るモダンなウェブサイト入門、noteに公開しました',
      url: 'https://note.com/ri_ra_ta_na',
      category: 'note',
      excerpt: 'Next.js 14の新機能を使って、モダンでパフォーマンスの高いウェブサイトを作る方法を解説しています。',
    },
    {
      id: 'news10',
      date: '2025年4月15日',
      title: '2025年版・フリーランスエンジニアになるためのロードマップ',
      url: 'https://note.com/ri_ra_ta_na',
      category: 'note',
      excerpt: '未経験からフリーランスエンジニアを目指す人のための、具体的なステップとスキルアップ方法を紹介しています。',
    },
  ];

  // カテゴリー別のアイコンを取得する関数
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'YouTube':
        return <FaYoutube className="text-red-600" />;
      case 'stand.fm':
        return <FaHeadphones className="text-purple-600" />;
      case 'note':
        return <FaPen className="text-green-600" />;
      case 'X':
      case 'Twitter':
        return <FaTwitter className="text-blue-400" />;
      default:
        return <FaCalendarAlt className="text-gray-400" />;
    }
  };

  // カテゴリー別の背景色を取得する関数
  const getCategoryBgColor = (category: string) => {
    switch (category) {
      case 'YouTube':
        return 'bg-red-900 text-red-100';
      case 'stand.fm':
        return 'bg-purple-900 text-purple-100';
      case 'note':
        return 'bg-green-900 text-green-100';
      case 'X':
      case 'Twitter':
        return 'bg-blue-900 text-blue-100';
      default:
        return 'bg-gray-700 text-gray-100';
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* ニュースヘッダー */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">NEWS</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            最新の活動情報、メディア更新、お知らせなどをチェックできます。
          </p>
        </div>
      </section>
      
      {/* ニュース一覧 */}
      <section className="py-12 bg-black">
        <div className="container-custom">
          <div className="space-y-0 divide-y divide-gray-800">
            {allNews.map((news) => (
              <a
                key={news.id}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-8 hover:bg-gray-900 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-4">{news.date}</span>
                      <span className={`px-3 py-1 rounded text-xs ${getCategoryBgColor(news.category)} flex items-center`}>
                        {getCategoryIcon(news.category)}
                        <span className="ml-1">{news.category}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                      {news.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{news.excerpt}</p>
                    <div className="flex items-center text-red-500">
                      詳細を見る <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* ページネーション（デモ用、実際の機能は実装していません） */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                2
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                3
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
