import React from 'react';
import Image from 'next/image';
import { FaYoutube, FaHeadphones, FaPen, FaTwitter, FaCode, FaLaptopCode, FaChartLine, FaRobot } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Profile() {
  // メディア活動
  const mediaActivities = [
    {
      id: 'media1',
      platform: 'YouTube',
      icon: <FaYoutube className="text-2xl text-red-600" />,
      title: 'プログラミングチャンネル',
      description: '最新のプログラミング技術やAIツールの活用方法を解説する動画を配信',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
    },
    {
      id: 'media2',
      platform: 'stand.fm',
      icon: <FaHeadphones className="text-2xl text-purple-600" />,
      title: 'テックポッドキャスト',
      description: 'テクノロジーや投資に関する情報、業界の最新トレンドを音声で配信',
      url: 'https://stand.fm/channels/6649cf88316143a771c72242',
    },
    {
      id: 'media3',
      platform: 'note',
      icon: <FaPen className="text-2xl text-green-600" />,
      title: 'テック＆投資ブログ',
      description: 'AI・NFTなどの最先端テクノロジーや投資について詳細な記事を執筆',
      url: 'https://note.com/ri_ra_ta_na',
    },
    {
      id: 'media4',
      platform: 'X（Twitter）',
      icon: <FaTwitter className="text-2xl text-blue-400" />,
      title: 'デイリーアップデート',
      description: '日々の活動や思考、業界の最新情報をリアルタイムで発信',
      url: 'https://x.com/ri_ra_ta_na',
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
                  src="/portfolio-site/images/profile-image.png"
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
              <p className="text-gray-300 mb-8">
                【社会人✕投資✕最新テクノロジー】<br /><br />
                AI・NFTなどの最先端テクノロジーから、投資や暗号資産の実践まで。<br />
                ネットでは見つからないリアルな体験談や、初心者でも迷わず実践できる情報を発信しています！
              </p>
            </div>
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
