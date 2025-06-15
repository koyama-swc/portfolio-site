import React from 'react';
import { getMediaFeeds } from '@/lib/fetchFeeds';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaHeadphones, FaPen, FaTwitter, FaArrowRight } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LatestMediaSSG from '@/components/LatestMediaSSG';

export default async function Home() {
  const feeds = await getMediaFeeds();
  // 最新のニュース
  const news = [
    {
      id: 'news1',
      date: '2025年6月1日',
      title: '【初心者向け】Windsurfのおすすめ設定まとめ、noteに公開しました',
      url: 'https://note.com/ri_ra_ta_na/n/n2345678901',
      category: 'note'
    },
    {
      id: 'news2',
      date: '2025年6月2日',
      title: 'イケハヤさんのVibe Codingサロンに入会しました！stand.fmで感想を話しています',
      url: 'https://stand.fm/episodes/683cd04d13f734b7d30b656d',
      category: 'stand.fm'
    },
    {
      id: 'news3',
      date: '2025年5月31日',
      title: 'AIコーディングツール「Windsurf」で「ToDoリスト」を作成しました！',
      url: 'https://www.youtube.com/@コヤマSWC/featured',
      category: 'YouTube'
    },
    {
      id: 'news4',
      date: '2025年5月15日',
      title: 'Google Geminiはここが凄い！ChatGPTやClaudeにはない強みとは？',
      url: 'https://note.com/ri_ra_ta_na/n/n1234567890',
      category: 'note'
    },
    {
      id: 'news5',
      date: '2025年6月2日',
      title: '活動紹介サイトをリニューアルしました！',
      url: '#',
      category: 'お知らせ'
    },
  ];

  // メディアプラットフォーム
  const mediaLinks = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <FaYoutube className="text-4xl text-red-600" />,
      description: 'プログラミングやAIに関する動画を配信',
      url: 'https://www.youtube.com/@コヤマSWC/featured'
    },
    {
      id: 'standfm',
      name: 'stand.fm',
      icon: <FaHeadphones className="text-4xl text-purple-600" />,
      description: 'テクノロジーや投資に関するポッドキャスト',
      url: 'https://stand.fm/channels/6649cf88316143a771c72242'
    },
    {
      id: 'note',
      name: 'note',
      icon: <FaPen className="text-4xl text-green-600" />,
      description: 'AI・NFTなどの最先端テクノロジーや投資について発信',
      url: 'https://note.com/ri_ra_ta_na'
    },
    {
      id: 'twitter',
      name: 'X（Twitter）',
      icon: <FaTwitter className="text-4xl text-blue-400" />,
      description: '日々の活動やつぶやきを投稿',
      url: 'https://x.com/ri_ra_ta_na'
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              PORTFOLIO
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              【社会人✕投資✕最新テクノロジー】<br />
              AI・NFTなどの最先端テクノロジーから、投資や暗号資産の実践まで
            </p>

              <Link href="/profile" className="btn-primary">
                プロフィールを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* ニュースセクション */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">WHAT'S NEW</h2>
          
          <div className="space-y-0">
            {news.map((item) => (
              <a 
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-item block px-4 py-6 flex flex-col sm:flex-row sm:items-center"
              >
                <div className="sm:w-1/4 mb-2 sm:mb-0">
                  <span className="news-date">{item.date}</span>
                  <span className="ml-4 px-2 py-1 text-xs bg-red-600 text-white rounded">{item.category}</span>
                </div>
                <h3 className="news-title sm:w-3/4">{item.title}</h3>
              </a>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/news" className="btn-primary">
              <span>すべてのニュースを見る</span>
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* メディアセクション */}
      <LatestMediaSSG feeds={feeds} />
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="section-title">MEDIA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaLinks.map((media) => (
              <a
                key={media.id}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex flex-col items-center text-center p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">
                  {media.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{media.name}</h3>
                <p className="text-gray-400 mb-4">{media.description}</p>
                <span className="text-red-500 flex items-center">
                  チャンネルを見る <FaArrowRight className="ml-2" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* プロフィールセクション */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">PROFILE</h2>
              <p className="text-gray-300 mb-6">
                【社会人✕投資✕最新テクノロジー】<br /><br />
                AI・NFTなどの最先端テクノロジーから、投資や暗号資産の実践まで。<br />
                ネットでは見つからないリアルな体験談や、初心者でも迷わず実践できる情報を発信しています！
              </p>
              <Link href="/profile" className="btn-primary">
                お問い合わせはこちら
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-red-600">
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
            </div>
          </div>
        </div>
      </section>
      
      {/* コンタクトセクション */}
      <section className="py-20 bg-black">
        <div className="container-custom text-center">
          <h2 className="section-title">CONTACT</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            お問い合わせやコラボレーションのご依頼など、お気軽にご連絡ください。
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
