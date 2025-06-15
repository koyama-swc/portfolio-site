'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const headerVariants = {
    top: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
      display: 'none',
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
      display: 'block',
    },
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            <span className="text-gradient">PORTFOLIO</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:block">
            <ul className="flex space-x-12">
              <li>
                <Link href="/" className="nav-link-active">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        <motion.div
          className="md:hidden"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          <div className="bg-black bg-opacity-95 mt-4 py-6 border-t border-red-600">
            <ul className="flex flex-col space-y-6 px-6">
              <li>
                <Link
                  href="/"
                  className="nav-link-active block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="nav-link block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
