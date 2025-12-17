'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Simple SVG Icons
const Icons = {
  Biology: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  Chemistry: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 2v7.31c0 .39-.23.74-.59.88L5 12.06A2.17 2.17 0 0 0 4.19 14.8c.24.47.6.86 1.05 1.13L9 18.2V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.8l3.76-2.26c.45-.27.81-.66 1.05-1.13a2.17 2.17 0 0 0-.81-2.74l-4.41-1.87a1 1 0 0 1-.59-.88V2" />
      <path d="M8.5 2h7" />
      <path d="M12 21v-3" />
    </svg>
  ),
  English: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  Math: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  ),
  Physics: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M20.2 20.2c2.4-2.4 2.4-6.3 0-8.7L12 3.3 3.8 11.5c-2.4 2.4-2.4 6.3 0 8.7" />
      <path d="M3.8 20.2c2.4 2.4 6.3 2.4 8.7 0L20.7 12l-8.2-8.2c-2.4-2.4-6.3-2.4-8.7 0" />
    </svg>
  ),
  History: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="22" x2="20" y2="22" />
      <line x1="4" y1="2" x2="20" y2="2" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="6" y1="6" x2="6" y2="22" />
      <line x1="10" y1="6" x2="10" y2="22" />
      <line x1="14" y1="6" x2="14" y2="22" />
      <line x1="18" y1="6" x2="18" y2="22" />
    </svg>
  ),
  Microscope: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  ),
  Atom: (props: React.SVGProps<SVGSVGElement>) => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z" />
    </svg>
  )
};

// Updated colors and icons as per new spec
const subjects = [
  { name: 'Biology', icon: Icons.Microscope, color: 'bg-[#6ECFA8]', iconColor: 'text-[#4DA381]' },
  { name: 'Chemistry', icon: Icons.Chemistry, color: 'bg-[#FFD562]', iconColor: 'text-[#C9A23A]' },
  { name: 'English', icon: Icons.English, color: 'bg-[#FF7B7B]', iconColor: 'text-[#B84E4E]' },
  { name: 'Math', icon: Icons.Math, color: 'bg-[#8B7EF8]', iconColor: 'text-[#5F54C9]' },
  { name: 'Physics', icon: Icons.Atom, color: 'bg-[#5AB6FF]', iconColor: 'text-[#3E8BC9]' },
  { name: 'History', icon: Icons.History, color: 'bg-[#C48E73]', iconColor: 'text-[#8F634D]' },
];

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const router = useRouter();

  const handleButtonClick = () => {
    if (selectedSubject) {
      router.push('/level');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8EF] flex flex-col items-center py-10 px-6 overflow-hidden select-none" style={{ fontFamily: 'var(--font-nunito)' }}>
      {/* Decorative Background Elements */}
      {/* Top Left Shape */}
      <div className="fixed -top-10 -left-10 w-64 h-64 bg-[#FDE9C9] rounded-full opacity-60 pointer-events-none" style={{ filter: 'blur(40px)' }} />
      
      {/* Top Right Dot Pattern */}
      <div className="fixed top-10 right-0 w-32 h-32 opacity-40 pointer-events-none z-0">
         <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="2" y="2" width="4" height="4" rx="2" fill="#D3C1A5" />
            </pattern>
            <rect width="100" height="100" fill="url(#dotPattern)" />
         </svg>
      </div>

      {/* Bottom Left Shape */}
      <div className="fixed -bottom-20 -left-10 w-72 h-72 bg-[#FDE9C9] rounded-full opacity-50 pointer-events-none" style={{ filter: 'blur(50px)' }} />

      {/* Bottom Right Shape (Subtle) */}
      <div className="fixed -bottom-10 -right-10 w-48 h-48 bg-[#FFE0B2] rounded-full opacity-30 pointer-events-none" style={{ filter: 'blur(40px)' }} />


      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 z-10 text-center tracking-tight">
        Choose Your <br /> Subject.
      </h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md z-10">
        {subjects.map((subject) => {
          const isSelected = selectedSubject === subject.name;
          return (
          <div
            key={subject.name}
            onClick={() => setSelectedSubject(subject.name)}
            className={`${subject.color} rounded-[24px] p-4 h-36 w-36 mx-auto flex flex-col justify-between relative shadow-sm cursor-pointer transition-all duration-200 ${
              isSelected 
                ? 'ring-4 ring-offset-2 ring-gray-300 scale-[1.02]' 
                : 'hover:scale-105 opacity-90 hover:opacity-100'
            }`}
          >
            {/* Icon Circle - Centered */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%]">
                 <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                    <subject.icon className={`w-8 h-8 ${subject.iconColor}`} />
                </div>
            </div>

            {/* Subject Name - Below Icon (visually), but effectively at bottom or middle-bottom */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[80%] w-full text-center">
                <span className="text-white font-bold text-lg tracking-wide drop-shadow-sm block">
                  {subject.name}
                </span>
            </div>

          </div>
          );
        })}
      </div>

      <button
        onClick={handleButtonClick}
        disabled={!selectedSubject}
        className={`mt-8 w-full max-w-md text-white font-extrabold py-4 rounded-full shadow-lg transition-all z-10 text-lg tracking-wide ${
          selectedSubject 
            ? 'bg-[#55B978] hover:bg-[#439660] cursor-pointer' 
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
}
