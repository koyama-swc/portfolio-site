import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PORTFOLIO</h3>
            <p className="text-gray-400 mb-4">
              活動内容や作品を紹介するポートフォリオサイト
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/ri_ra_ta_na"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@コヤマSWC/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  PROFILE
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  WORKS
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  MEDIA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MEDIA</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.youtube.com/@コヤマSWC/featured" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://stand.fm/channels/6649cf88316143a771c72242" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  stand.fm
                </a>
              </li>
              <li>
                <a 
                  href="https://note.com/ri_ra_ta_na" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  note
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/ri_ra_ta_na" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                >
                  X（Twitter）
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} PORTFOLIO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
