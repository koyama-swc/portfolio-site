'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaYoutube, FaHeadphones, FaPen, FaTwitter, FaThumbsUp, FaComment, FaRetweet, FaEye, FaClock, FaTag } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Media() {
  const [activeTab, setActiveTab] = useState('youtube');

  // YouTubeコンテンツ
  const youtubeVideos = [
    {
      id: 'video1',
      title: 'AIコーディングツール「Windsurf」で「ToDoリスト」を作成してみた！',
      thumbnail: '/youtube-thumbnail-1.jpg',
      views: '',
      date: '2025年6月1日',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
    },
    {
      id: 'video2',
      title: 'ChatGPTとGoogle Geminiを徹底比較！どっちが優秀？',
      thumbnail: '/youtube-thumbnail-2.jpg',
      views: '',
      date: '2025年5月25日',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
    },
    {
      id: 'video3',
      title: 'Next.js 14の新機能を解説！App Routerの使い方',
      thumbnail: '/youtube-thumbnail-3.jpg',
      views: '',
      date: '2025年5月18日',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
    },
    {
      id: 'video4',
      title: 'フリーランスエンジニアになるには？未経験からのロードマップ',
      thumbnail: '/youtube-thumbnail-4.jpg',
      views: '',
      date: '2025年5月10日',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
    },
    {
      id: 'video5',
      title: 'プログラミング初心者におすすめの言語は？2025年最新版',
      thumbnail: '/youtube-thumbnail-5.jpg',
      views: '',
      date: '2025年5月3日',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
    },
    {
      id: 'video6',
      title: 'AIを活用した効率的な学習方法！ChatGPTで勉強する方法',
      thumbnail: '/youtube-thumbnail-6.jpg',
      views: '',
      date: '2025年4月26日',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
    },
  ];

  // stand.fmコンテンツ
  const standFmEpisodes = [
    {
      id: 'episode1',
      title: 'イケハヤさんのVibe Codingサロンに入会した感想',
      description: 'イケハヤさんのVibe Codingサロンに入会してみた感想と、実際に得られた学びについて話しています。',
      date: '2025年6月2日',
      duration: '15:42',
      url: 'https://stand.fm/episodes/683cd04d13f734b7d30b656d',
    },
    {
      id: 'episode2',
      title: 'AIツールを使った効率的な作業術',
      description: 'ChatGPT、Gemini、Claude、Windsurfなどの最新AIツールを活用して、作業効率を上げる方法を解説しています。',
      date: '2025年5月25日',
      duration: '18:23',
      url: 'https://stand.fm/channels/6649cf88316143a771c72242',
    },
    {
      id: 'episode3',
      title: 'フリーランスエンジニアの1日のルーティン',
      description: '私がフリーランスエンジニアとして実践している、生産性を高めるための1日のルーティンを紹介します。',
      date: '2025年5月18日',
      duration: '22:15',
      url: 'https://stand.fm/channels/6649cf88316143a771c72242',
    },
    {
      id: 'episode4',
      title: '投資初心者が最初に知っておくべきこと',
      description: '株式投資や暗号資産投資を始める前に、絶対に知っておくべき基礎知識と心構えについて話しています。',
      date: '2025年5月11日',
      duration: '25:47',
      url: 'https://stand.fm/channels/6649cf88316143a771c72242',
    },
  ];

  // noteコンテンツ
  const noteArticles = [
    {
      id: 'article1',
      title: '【初心者向け】Windsurfのおすすめ設定まとめ',
      description: 'AIコーディングアシスタント「Windsurf」を最大限活用するための設定方法や使い方のコツを詳しく解説しています。',
      date: '2025年6月1日',
      likes: 0,
      readTime: '5分',
      tags: ['AI', 'プログラミング', 'Windsurf'],
      url: 'https://note.com/ri_ra_ta_na/n/n2345678901',
    },
    {
      id: 'article2',
      title: 'Google Geminiはここが凄い！ChatGPTやClaudeにはない強みとは？',
      description: 'Google Geminiの特徴や強み、ChatGPTやClaudeとの違いを徹底比較しました。AIツール選びの参考にどうぞ。',
      date: '2025年5月15日',
      likes: 0,
      readTime: '8分',
      tags: ['AI', 'Google Gemini', 'ChatGPT'],
      url: 'https://note.com/ri_ra_ta_na/n/n1234567890',
    },
    {
      id: 'article3',
      title: 'Next.js 14で作るモダンなウェブサイト入門',
      description: 'Next.js 14の新機能を使って、モダンでパフォーマンスの高いウェブサイトを作る方法を解説します。',
      date: '2025年5月1日',
      likes: 0,
      readTime: '10分',
      tags: ['Next.js', 'React', 'ウェブ開発'],
      url: 'https://note.com/ri_ra_ta_na',
    },
    {
      id: 'article4',
      title: '2025年版・フリーランスエンジニアになるためのロードマップ',
      description: '未経験からフリーランスエンジニアを目指す人のための、具体的なステップとスキルアップ方法を紹介します。',
      date: '2025年4月15日',
      likes: 0,
      readTime: '12分',
      tags: ['フリーランス', 'キャリア', 'プログラミング'],
      url: 'https://note.com/ri_ra_ta_na',
    },
  ];

  // Xコンテンツ
  const tweets = [
    {
      id: 'tweet1',
      content: 'Windsurfを使ってポートフォリオサイトを作成中。AIコーディングアシスタントの進化がすごい！ #Windsurf #AI #ポートフォリオ',
      date: '2025年6月3日',
      likes: 0,
      retweets: 0,
      replies: 0,
      url: 'https://x.com/ri_ra_ta_na',
    },
    {
      id: 'tweet2',
      content: '最新のnote記事「【初心者向け】Windsurfのおすすめ設定まとめ」を公開しました！ AIコーディングの効率が格段に上がる設定方法を解説しています。 #Windsurf #AI #プログラミング',
      date: '2025年6月1日',
      likes: 0,
      retweets: 0,
      replies: 0,
      url: 'https://x.com/ri_ra_ta_na',
    },
    {
      id: 'tweet3',
      content: 'stand.fmで新しいエピソード「イケハヤさんのVibe Codingサロンに入会した感想」を公開しました！ #VibeCoding #イケハヤ #プログラミング',
      date: '2025年6月2日',
      likes: 0,
      retweets: 0,
      replies: 0,
      url: 'https://x.com/ri_ra_ta_na',
    },
    {
      id: 'tweet4',
      content: 'Next.js 14 + Tailwind CSS + TypeScriptの組み合わせが最高すぎる。モダンなウェブ開発がこんなに楽しいとは！ #Next.js #TailwindCSS #TypeScript',
      date: '2025年5月30日',
      likes: 0,
      retweets: 0,
      replies: 0,
      url: 'https://x.com/ri_ra_ta_na',
    },
    {
      id: 'tweet5',
      content: 'ChatGPTとGoogle Geminiを比較した動画を公開しました！どちらが使いやすいか、用途別に詳しく解説しています。 #ChatGPT #Gemini #AI',
      date: '2025年5月25日',
      likes: 0,
      retweets: 0,
      replies: 0,
      url: 'https://x.com/ri_ra_ta_na',
    },
    {
      id: 'tweet6',
      content: '今日もコーディング作業が捗る。AIの力を借りつつ、自分のスキルも磨いていく。この相乗効果が大事。 #プログラミング #AI #個人開発',
      date: '2025年5月28日',
      likes: 0,
      retweets: 0,
      replies: 0,
      url: 'https://x.com/ri_ra_ta_na',
    },
  ];

  // タブの切り替え
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* メディアヘッダー */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">MEDIA</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            YouTube、stand.fm、note、X（Twitter）など、様々なプラットフォームで情報発信しています。
            各メディアの最新コンテンツをチェックしてください。
          </p>
          
          {/* タブナビゲーション */}
          <div className="flex flex-wrap border-b border-gray-800 mb-12">
            <button
              className={`tab-button ${activeTab === 'youtube' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('youtube')}
            >
              <FaYoutube className="mr-2" /> YouTube
            </button>
            <button
              className={`tab-button ${activeTab === 'standfm' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('standfm')}
            >
              <FaHeadphones className="mr-2" /> stand.fm
            </button>
            <button
              className={`tab-button ${activeTab === 'note' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('note')}
            >
              <FaPen className="mr-2" /> note
            </button>
            <button
              className={`tab-button ${activeTab === 'twitter' ? 'tab-active' : ''}`}
              onClick={() => handleTabChange('twitter')}
            >
              <FaTwitter className="mr-2" /> X（Twitter）
            </button>
          </div>
        </div>
      </section>
      
      {/* タブコンテンツ */}
      <section className="py-12 bg-black">
        <div className="container-custom">
          {/* YouTube */}
          {activeTab === 'youtube' && (
            <div className="tab-content">
              <div className="flex items-center mb-8">
                <FaYoutube className="text-4xl text-red-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">YouTube Channel</h2>
                  <p className="text-gray-400">プログラミングやAIに関する動画を配信</p>
                </div>
                <a
                  href="https://www.youtube.com/@コヤマSWC/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto btn-primary"
                >
                  チャンネルを見る
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {youtubeVideos.map((video) => (
                  <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative aspect-video bg-gray-800">
                      {/* サムネイル画像がある場合は表示、ない場合はプレースホルダー */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaYoutube className="text-5xl text-red-600" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-2 py-1 text-xs">
                        {/* 視聴回数は表示しない */}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-gray-400 text-sm">{video.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* stand.fm */}
          {activeTab === 'standfm' && (
            <div className="tab-content">
              <div className="flex items-center mb-8">
                <FaHeadphones className="text-4xl text-purple-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">stand.fm Channel</h2>
                  <p className="text-gray-400">テクノロジーや投資に関するポッドキャスト</p>
                </div>
                <a
                  href="https://stand.fm/channels/6649cf88316143a771c72242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto btn-primary"
                >
                  チャンネルを見る
                </a>
              </div>
              
              <div className="space-y-6">
                {standFmEpisodes.map((episode) => (
                  <div key={episode.id} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/4 flex items-center">
                        <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mr-4">
                          <FaHeadphones className="text-2xl text-purple-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{episode.date}</div>
                          <div className="flex items-center text-sm text-gray-400">
                            <FaClock className="mr-1" /> {episode.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                        <p className="text-gray-400 mb-4">{episode.description}</p>
                        <a
                          href={episode.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:text-purple-400 transition-colors duration-300 flex items-center"
                        >
                          エピソードを聴く
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* note */}
          {activeTab === 'note' && (
            <div className="tab-content">
              <div className="flex items-center mb-8">
                <FaPen className="text-4xl text-green-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">note</h2>
                  <p className="text-gray-400">AI・NFTなどの最先端テクノロジーや投資について発信</p>
                </div>
                <a
                  href="https://note.com/ri_ra_ta_na"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto btn-primary"
                >
                  マガジンを見る
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {noteArticles.map((article) => (
                  <a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-6 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{article.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-500">
                      <div>{article.date}</div>
                      <div className="flex items-center">
                        <FaClock className="mr-1" /> {article.readTime}
                      </div>
                      <div className="flex items-center">
                        <FaThumbsUp className="mr-1" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* X（Twitter） */}
          {activeTab === 'twitter' && (
            <div className="tab-content">
              <div className="flex items-center mb-8">
                <FaTwitter className="text-4xl text-blue-400 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">X（Twitter）</h2>
                  <p className="text-gray-400">日々の活動やつぶやきを投稿</p>
                </div>
                <a
                  href="https://x.com/ri_ra_ta_na"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto btn-primary"
                >
                  プロフィールを見る
                </a>
              </div>
              
              <div className="space-y-6">
                {tweets.map((tweet) => (
                  <div key={tweet.id} className="card p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                        <FaTwitter className="text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-bold">コヤマ</h3>
                          <span className="text-gray-500 text-sm">{tweet.date}</span>
                        </div>
                        <p className="text-gray-300 mb-4">{tweet.content}</p>
                        <div className="flex space-x-6 text-gray-500">
                          <div className="flex items-center">
                            <FaComment className="mr-1" />
                          </div>
                          <div className="flex items-center">
                            <FaRetweet className="mr-1" />
                          </div>
                          <div className="flex items-center">
                            <FaThumbsUp className="mr-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
