'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaComment, FaPaperPlane, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // フォーム送信の処理をシミュレート
    setIsSubmitting(true);
    
    // 実際のAPIエンドポイントに送信する代わりに、成功をシミュレート
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // 成功メッセージを数秒後に非表示
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* コンタクトヘッダー */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">CONTACT</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            お問い合わせ、ご依頼、コラボレーションのご相談など、お気軽にご連絡ください。
            以下のフォームからメッセージを送信いただくか、各種SNSからダイレクトメッセージをお送りください。
          </p>
        </div>
      </section>
      
      {/* コンタクトフォーム */}
      <section className="py-12 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* フォーム */}
            <div>
              <h2 className="text-2xl font-bold mb-6">メッセージを送る</h2>
              
              {submitSuccess && (
                <div className="bg-green-900 text-green-100 p-4 rounded mb-6 animate-pulse">
                  メッセージが送信されました。ありがとうございます！
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-900 text-red-100 p-4 rounded mb-6">
                  送信中にエラーが発生しました。後ほど再度お試しください。
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUser className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input pl-10"
                      placeholder="山田 太郎"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaEnvelope className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input pl-10"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">選択してください</option>
                    <option value="依頼・相談">お仕事の依頼・相談</option>
                    <option value="コラボレーション">コラボレーションの提案</option>
                    <option value="質問">質問・お問い合わせ</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FaComment className="text-gray-500" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-input pl-10"
                      placeholder="メッセージを入力してください"
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>送信中...</>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> 送信する
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* コンタクト情報 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">お問い合わせ先</h2>
              
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">直接のお問い合わせ</h3>
                <p className="text-gray-300 mb-6">
                  お急ぎの場合や、より詳細なご相談がある場合は、以下の連絡先までお気軽にご連絡ください。
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center mr-4">
                      <FaEnvelope className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold">メールアドレス</h4>
                      <p className="text-gray-400">contact@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">SNSでのお問い合わせ</h3>
                <p className="text-gray-300 mb-6">
                  各種SNSのダイレクトメッセージからもお問い合わせいただけます。
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://x.com/ri_ra_ta_na"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-red-500 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center mr-4">
                      <FaTwitter className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">X（Twitter）</h4>
                      <p className="text-gray-400">@ri_ra_ta_na</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.youtube.com/@コヤマSWC/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-red-500 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center mr-4">
                      <FaYoutube className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">YouTube</h4>
                      <p className="text-gray-400">@コヤマSWC</p>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-red-500 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center mr-4">
                      <FaInstagram className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">Instagram</h4>
                      <p className="text-gray-400">@username</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
