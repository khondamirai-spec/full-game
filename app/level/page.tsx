'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const levels = [
  {
    name: 'Beginner',
    description: 'Learning for while learning and rearn.',
    color: 'bg-[#6ECFA8]', // Green
    icon: '🧑‍🎓', // Student
  },
  {
    name: 'Medium',
    description: 'Practicing for practicing.',
    color: 'bg-[#FFD562]', // Yellow
    icon: '📝', // Writing
  },
  {
    name: 'Pro',
    description: 'Mastering for mastering.',
    color: 'bg-[#8B7EF8]', // Purple
    icon: '🏆', // Trophy
  },
];

export default function LevelPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const router = useRouter();

  const getButtonText = () => {
    if (selectedLevel === 'Beginner') return 'Start Learning';
    if (selectedLevel === 'Medium' || selectedLevel === 'Pro') return 'Test Your Level';
    return 'Select a Level';
  };

  const handleButtonClick = () => {
    if (selectedLevel) {
      router.push('/home');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8EF] flex flex-col items-center py-10 px-6 overflow-hidden select-none" style={{ fontFamily: 'var(--font-nunito)' }}>
      {/* Background Elements */}
      <div className="fixed -top-10 -left-10 w-64 h-64 bg-[#FDE9C9] rounded-full opacity-60 pointer-events-none" style={{ filter: 'blur(40px)' }} />
      <div className="fixed top-10 right-0 w-32 h-32 opacity-40 pointer-events-none z-0">
         <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="2" y="2" width="4" height="4" rx="2" fill="#D3C1A5" />
            </pattern>
            <rect width="100" height="100" fill="url(#dotPattern)" />
         </svg>
      </div>
      <div className="fixed -bottom-20 -left-10 w-72 h-72 bg-[#FDE9C9] rounded-full opacity-50 pointer-events-none" style={{ filter: 'blur(50px)' }} />
      <div className="fixed -bottom-10 -right-10 w-48 h-48 bg-[#FFE0B2] rounded-full opacity-30 pointer-events-none" style={{ filter: 'blur(40px)' }} />

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 z-10 text-center tracking-tight">
        What's Your <br /> Level?
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-md z-10">
        {levels.map((level) => {
          const isSelected = selectedLevel === level.name;
          return (
            <div
              key={level.name}
              onClick={() => setSelectedLevel(level.name)}
              className={`${level.color} rounded-[24px] p-6 flex items-center justify-between relative shadow-sm cursor-pointer h-32 transition-all duration-200 ${
                isSelected 
                  ? 'ring-4 ring-offset-2 ring-gray-300 scale-[1.02]' 
                  : 'hover:scale-105 opacity-90 hover:opacity-100'
              }`}
            >
              <div className="flex flex-col text-white">
                  <h2 className="text-2xl font-bold">{level.name}</h2>
                  <p className="text-sm opacity-90 mt-1 max-w-[150px] leading-tight">{level.description}</p>
              </div>
              <div className="text-6xl filter drop-shadow-sm">
                  {level.icon}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleButtonClick}
        disabled={!selectedLevel}
        className={`mt-8 w-full max-w-md text-white font-extrabold py-4 rounded-full shadow-lg transition-all z-10 text-lg tracking-wide ${
          selectedLevel 
            ? 'bg-[#55B978] hover:bg-[#439660] cursor-pointer' 
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        {getButtonText()}
      </button>
    </div>
  );
}
