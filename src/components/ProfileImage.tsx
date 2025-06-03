'use client';

import React from 'react';

const ProfileImage = () => {
  return (
    <div className="w-full h-full relative">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* 背景 */}
        <rect width="500" height="500" fill="#1a1a1a" />
        
        {/* 赤髪 */}
        <path d="M 250 100 C 180 100 150 150 140 200 C 130 250 140 300 160 350 C 180 400 220 420 250 430 C 280 420 320 400 340 350 C 360 300 370 250 360 200 C 350 150 320 100 250 100 Z" fill="#e60000" />
        
        {/* 顔 */}
        <ellipse cx="250" cy="270" rx="80" ry="100" fill="#f9e8d0" />
        
        {/* 目 */}
        <ellipse cx="220" cy="250" rx="15" ry="10" fill="#000" />
        <ellipse cx="280" cy="250" rx="15" ry="10" fill="#000" />
        <ellipse cx="220" cy="250" rx="5" ry="5" fill="#e60000" />
        <ellipse cx="280" cy="250" rx="5" ry="5" fill="#e60000" />
        
        {/* 眉毛 */}
        <path d="M 200 230 C 210 225 230 225 240 230" stroke="#4d2600" strokeWidth="5" fill="none" />
        <path d="M 260 230 C 270 225 290 225 300 230" stroke="#4d2600" strokeWidth="5" fill="none" />
        
        {/* 口 */}
        <path d="M 230 300 C 240 310 260 310 270 300" stroke="#000" strokeWidth="3" fill="none" />
        
        {/* 服（赤い上着） */}
        <path d="M 150 350 C 150 400 200 450 250 450 C 300 450 350 400 350 350 L 350 320 L 150 320 Z" fill="#990000" />
        
        {/* 首元の装飾 */}
        <path d="M 200 320 L 300 320 L 300 350 L 200 350 Z" fill="#333" />
        
        {/* スカルアクセサリー */}
        <circle cx="250" cy="335" r="15" fill="#fff" />
        <circle cx="245" cy="330" r="3" fill="#000" />
        <circle cx="255" cy="330" r="3" fill="#000" />
        <path d="M 240 340 C 245 345 255 345 260 340" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

export default ProfileImage;
