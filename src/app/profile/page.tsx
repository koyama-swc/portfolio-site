import React from 'react';
import Image from 'next/image';
import { FaYoutube, FaHeadphones, FaPen, FaTwitter, FaCode, FaLaptopCode, FaChartLine, FaRobot } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Profile() {
  // スキルセット
  const skills = [
    {
      id: 'skill1',
      name: 'プログラミング',
      icon: <FaCode className="text-3xl text-red-500" />,
      description: 'JavaScript、TypeScript、React、Next.js、Node.jsなどのフロントエンド・バックエンド技術',
      level: 90,
    },
    {
      id: 'skill2',
      name: 'AI開発',
      icon: <FaRobot className="text-3xl text-blue-500" />,
      description: 'ChatGPT、Google Gemini、Claude、Windsurfなどのツールを活用したAI開発',
      level: 85,
    },
    {
      id: 'skill3',
      name: 'ウェブデザイン',
      icon: <FaLaptopCode className="text-3xl text-green-500" />,
      description: 'Tailwind CSS、Figma、Adobe XDを使用したモダンなウェブデザイン',
      level: 80,
    },
    {
      id: 'skill4',
      name: '投資・暗号資産',
      icon: <FaChartLine className="text-3xl text-yellow-500" />,
      description: '株式投資、NFT、暗号資産などの知識と実践経験',
      level: 75,
    },
  ];

  // 経歴
  const history = [
    {
      id: 'history1',
      year: '2023 - 現在',
      title: 'フリーランスエンジニア',
      description: 'ウェブ開発、AI開発を中心に活動。YouTube、stand.fm、noteなどで情報発信も行う。',
    },
    {
      id: 'history2',
      year: '2020 - 2023',
      title: 'テクノロジー企業 シニアエンジニア',
      description: 'フロントエンド開発チームのリーダーとして、複数のプロジェクトを担当。',
    },
    {
      id: 'history3',
      year: '2018 - 2020',
      title: 'スタートアップ企業 エンジニア',
      description: 'ウェブアプリケーション開発、APIの設計・実装を担当。',
    },
    {
      id: 'history4',
      year: '2015 - 2018',
      title: '大学卒業・IT企業入社',
      description: '情報工学を専攻。卒業後、IT企業でキャリアをスタート。',
    },
  ];

  // メディア活動
  const mediaActivities = [
    {
      id: 'media1',
      platform: 'YouTube',
      icon: <FaYoutube className="text-2xl text-red-600" />,
      title: 'プログラミングチャンネル',
      description: '最新のプログラミング技術やAIツールの活用方法を解説する動画を配信',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
      subscribers: '5,000+',
    },
    {
      id: 'media2',
      platform: 'stand.fm',
      icon: <FaHeadphones className="text-2xl text-purple-600" />,
      title: 'テックポッドキャスト',
      description: 'テクノロジーや投資に関する情報、業界の最新トレンドを音声で配信',
      url: 'https://stand.fm/channels/6649cf88316143a771c72242',
      subscribers: '3,000+',
    },
    {
      id: 'media3',
      platform: 'note',
      icon: <FaPen className="text-2xl text-green-600" />,
      title: 'テック＆投資ブログ',
      description: 'AI・NFTなどの最先端テクノロジーや投資について詳細な記事を執筆',
      url: 'https://note.com/ri_ra_ta_na',
      subscribers: '2,000+',
    },
    {
      id: 'media4',
      platform: 'X（Twitter）',
      icon: <FaTwitter className="text-2xl text-blue-400" />,
      title: 'デイリーアップデート',
      description: '日々の活動や思考、業界の最新情報をリアルタイムで発信',
      url: 'https://x.com/ri_ra_ta_na',
      subscribers: '10,000+',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* プロフィールヘッダー */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">PROFILE</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-red-600 mb-6">
                {/* プロフィール画像を配置 */}
                <Image 
                  src="/images/profile-image.png" 
                  alt="コヤマのプロフィール画像" 
                  width={400} 
                  height={400} 
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-black/50 pointer-events-none"></div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {mediaActivities.map((media) => (
                  <a
                    key={media.id}
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    {media.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">コヤマ</h2>
              <p className="text-gray-300 mb-6 text-lg">
                【社会人✕投資✕最新テクノロジー】<br /><br />
                AI・NFTなどの最先端テクノロジーから、投資や暗号資産の実践まで。<br />
                ネットでは見つからないリアルな体験談や、初心者でも迷わず実践できる情報を発信しています！<br /><br />
                フリーランスエンジニアとして活動しながら、YouTube、stand.fm、note、X（Twitter）などの複数のプラットフォームで情報発信を行っています。
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="text-red-500 font-semibold mb-1">活動開始</h3>
                  <p className="text-white">2015年</p>
                </div>
                <div>
                  <h3 className="text-red-500 font-semibold mb-1">専門分野</h3>
                  <p className="text-white">ウェブ開発、AI開発、投資</p>
                </div>
                <div>
                  <h3 className="text-red-500 font-semibold mb-1">総フォロワー</h3>
                  <p className="text-white">20,000+</p>
                </div>
                <div>
                  <h3 className="text-red-500 font-semibold mb-1">拠点</h3>
                  <p className="text-white">東京</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* スキルセクション */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="section-title">SKILLS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.id} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{skill.description}</p>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-700 h-full rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 経歴セクション */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">HISTORY</h2>
          
          <div className="relative border-l-2 border-red-600 pl-8 ml-4 space-y-12">
            {history.map((item, index) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-12 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div className="mb-2 text-red-500 font-bold">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* メディア活動セクション */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="section-title">MEDIA ACTIVITIES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaActivities.map((media) => (
              <a
                key={media.id}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{media.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{media.platform}</h3>
                    <p className="text-sm text-gray-500">{media.subscribers} フォロワー</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-red-500">{media.title}</h4>
                <p className="text-gray-400">{media.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
