import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaMobileAlt, FaRobot } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Works() {
  // プロジェクト一覧
  const projects = [
    {
      id: 'project1',
      title: 'ポートフォリオサイト',
      description: 'Next.js、TypeScript、Tailwind CSSを使用した、Acid Black Cherryのウェブサイトを参考にしたダークでスタイリッシュなポートフォリオサイト。',
      image: '/portfolio-thumbnail.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'ウェブ開発',
      icon: <FaLaptopCode className="text-red-500" />,
      links: [
        {
          type: 'github',
          url: 'https://github.com/username/portfolio-site',
          icon: <FaGithub />,
          label: 'GitHub'
        },
        {
          type: 'live',
          url: '#',
          icon: <FaExternalLinkAlt />,
          label: 'Live Demo'
        }
      ]
    },
    {
      id: 'project2',
      title: '活動紹介サイト',
      description: 'YouTube、stand.fm、note、X（Twitter）の4つのプラットフォームでの活動を紹介するウェブサイト。タブ切り替え形式のUIを実装。',
      image: '/activity-site-thumbnail.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'ウェブ開発',
      icon: <FaLaptopCode className="text-blue-500" />,
      links: [
        {
          type: 'github',
          url: 'https://github.com/username/activity-site',
          icon: <FaGithub />,
          label: 'GitHub'
        },
        {
          type: 'live',
          url: '#',
          icon: <FaExternalLinkAlt />,
          label: 'Live Demo'
        }
      ]
    },
    {
      id: 'project3',
      title: 'AI画像生成アプリ',
      description: 'OpenAI APIを使用した、テキストから画像を生成するウェブアプリケーション。プロンプトエンジニアリングのテクニックも実装。',
      image: '/ai-image-app-thumbnail.jpg',
      technologies: ['React', 'Node.js', 'Express', 'OpenAI API'],
      category: 'AI開発',
      icon: <FaRobot className="text-green-500" />,
      links: [
        {
          type: 'github',
          url: 'https://github.com/username/ai-image-generator',
          icon: <FaGithub />,
          label: 'GitHub'
        },
        {
          type: 'live',
          url: '#',
          icon: <FaExternalLinkAlt />,
          label: 'Live Demo'
        }
      ]
    },
    {
      id: 'project4',
      title: 'NFTマーケットプレイス',
      description: 'イーサリアムブロックチェーン上で動作するNFTマーケットプレイス。NFTの作成、販売、購入機能を実装。',
      image: '/nft-marketplace-thumbnail.jpg',
      technologies: ['React', 'Solidity', 'Ethers.js', 'Hardhat'],
      category: 'ブロックチェーン',
      icon: <FaCode className="text-purple-500" />,
      links: [
        {
          type: 'github',
          url: 'https://github.com/username/nft-marketplace',
          icon: <FaGithub />,
          label: 'GitHub'
        },
        {
          type: 'live',
          url: '#',
          icon: <FaExternalLinkAlt />,
          label: 'Live Demo'
        }
      ]
    },
    {
      id: 'project5',
      title: 'フィットネストラッカーアプリ',
      description: 'ワークアウトの記録、栄養管理、進捗トラッキング機能を備えたモバイルアプリ。ユーザー認証とデータ同期も実装。',
      image: '/fitness-app-thumbnail.jpg',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'モバイルアプリ',
      icon: <FaMobileAlt className="text-yellow-500" />,
      links: [
        {
          type: 'github',
          url: 'https://github.com/username/fitness-tracker',
          icon: <FaGithub />,
          label: 'GitHub'
        }
      ]
    },
    {
      id: 'project6',
      title: 'AIチャットボット',
      description: 'GPT-4を活用した、特定の専門分野に特化したチャットボット。ナレッジベースとの連携機能も実装。',
      image: '/chatbot-thumbnail.jpg',
      technologies: ['Python', 'FastAPI', 'OpenAI API', 'React'],
      category: 'AI開発',
      icon: <FaRobot className="text-blue-500" />,
      links: [
        {
          type: 'github',
          url: 'https://github.com/username/ai-chatbot',
          icon: <FaGithub />,
          label: 'GitHub'
        },
        {
          type: 'live',
          url: '#',
          icon: <FaExternalLinkAlt />,
          label: 'Live Demo'
        }
      ]
    },
  ];

  // カテゴリー一覧
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'web', name: 'ウェブ開発' },
    { id: 'ai', name: 'AI開発' },
    { id: 'mobile', name: 'モバイルアプリ' },
    { id: 'blockchain', name: 'ブロックチェーン' },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* ワークスヘッダー */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">WORKS</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            これまでに手がけたプロジェクトやポートフォリオ作品を紹介します。
            ウェブ開発、AI開発、モバイルアプリ、ブロックチェーンなど、様々な分野のプロジェクトに取り組んでいます。
          </p>
          
          {/* カテゴリーフィルター（実際の機能は実装していません） */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full border border-gray-700 hover:border-red-500 hover:text-red-500 transition-colors duration-300 ${
                  category.id === 'all' ? 'bg-red-500 text-white border-red-500' : 'bg-transparent text-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* プロジェクト一覧 */}
      <section className="py-12 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card overflow-hidden group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative aspect-video bg-gray-800 overflow-hidden">
                  {/* プロジェクト画像がある場合は表示、ない場合はプレースホルダー */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl">{project.icon}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4">
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded mr-2">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs px-2 py-1 border border-gray-700 text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* コンタクトCTA */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">プロジェクトのご依頼・ご相談</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            新規プロジェクトのご依頼やコラボレーションのご相談など、お気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせフォーム
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
