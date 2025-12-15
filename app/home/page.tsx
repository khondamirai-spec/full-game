'use client';

import React from 'react';
import Link from 'next/link';

// SVGs for Bottom Navigation
const NavIcons = {
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  Map: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  Resources: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h6" />
    </svg>
  ),
  Profile: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

// Other Icons
const Icons = {
  Pencil: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ),
  Flask: (props: React.SVGProps<SVGSVGElement>) => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 2v7.31c0 .39-.23.74-.59.88L5 12.06A2.17 2.17 0 0 0 4.19 14.8c.24.47.6.86 1.05 1.13L9 18.2V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.8l3.76-2.26c.45-.27.81-.66 1.05-1.13a2.17 2.17 0 0 0-.81-2.74l-4.41-1.87a1 1 0 0 1-.59-.88V2" />
      <path d="M8.5 2h7" />
    </svg>
  ),
  Coin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" stroke="#B8860B" strokeWidth="1" {...props}>
        <circle cx="12" cy="12" r="10" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="12" fontWeight="bold" fill="#B8860B">$</text>
    </svg>
  )
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF8EF] font-sans pb-20 overflow-x-hidden" style={{ fontFamily: 'var(--font-nunito)' }}>
      {/* Top Header Section */}
      <div className="bg-[#8B7EF8] pt-10 pb-20 px-6 rounded-b-[40px] relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center border-2 border-white overflow-hidden">
                {/* Avatar Placeholder */}
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
             </div>
             <div className="text-white">
                <h2 className="font-bold text-lg leading-none">Peter</h2>
                <span className="text-sm opacity-90">Haltermy</span>
             </div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2">
             <span className="text-white font-bold">32.503</span>
             <div className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-yellow-600"></div>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="bg-[#FFF4E0] rounded-3xl p-6 flex items-center justify-between relative shadow-lg mx-auto w-full">
            <div className="flex-1 z-10">
                <h1 className="text-xl font-extrabold text-[#4A4A4A] leading-tight mb-2">
                    Welcome Back,<br/> Peter! Ready to<br/> Learn?
                </h1>
            </div>
            {/* Mascot Placeholder */}
             <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center border-4 border-white shadow-sm relative">
                <span className="text-4xl">😊</span>
             </div>
        </div>
        
        {/* Pagination Dots (Visual only) */}
        <div className="flex justify-center gap-1.5 mt-4">
             <div className="w-6 h-1.5 bg-[#5F54C9] rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-[#5F54C9]/40 rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-[#5F54C9]/40 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 mt-6">
        
        {/* Featured Games Section 1 */}
        <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-extrabold text-gray-800">Featured Games</h2>
            <span className="text-gray-400 text-sm font-bold cursor-pointer hover:text-gray-600">See All</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {/* Beginner Card */}
            <div className="min-w-[160px] bg-[#6ECFA8] rounded-[24px] p-4 h-48 relative flex flex-col items-center justify-center shadow-md">
                 <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <Icons.Pencil className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-white font-bold text-lg">Beginner</h3>
                 <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs">🤍</span>
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/10 to-transparent rounded-b-[24px]"></div>
                 {/* Character peeking */}
                 <div className="absolute -bottom-2 -right-2 text-3xl">👦</div>
            </div>

            {/* Medium Card */}
            <div className="min-w-[160px] bg-[#FFD562] rounded-[24px] p-4 h-48 relative flex flex-col items-center justify-center shadow-md">
                 <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <Icons.Flask className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-white font-bold text-lg">Medium</h3>
                  <div className="absolute top-3 right-3 w-6 h-6 bg-white/50 rounded-full flex items-center justify-center">
                    <span className="text-xs">⭐</span>
                 </div>
                 <div className="absolute -bottom-2 -right-2 text-3xl">🧑‍🔬</div>
            </div>
             {/* Pro Card (Partial) */}
             <div className="min-w-[160px] bg-[#8B7EF8] rounded-[24px] p-4 h-48 relative flex flex-col items-center justify-center shadow-md opacity-50">
                  <h3 className="text-white font-bold text-lg">Pro</h3>
            </div>
        </div>

        {/* Featured Games Section 2 */}
         <div className="flex justify-between items-end mb-4 mt-2">
            <h2 className="text-xl font-extrabold text-gray-800">Featured Games</h2>
            <span className="text-gray-400 text-sm font-bold cursor-pointer hover:text-gray-600">See all</span>
        </div>
        
         <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#FF7B7B] rounded-2xl h-32 relative overflow-hidden p-4 shadow-sm">
                 <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full"></div>
                 <span className="text-4xl absolute bottom-2 right-2">😄</span>
             </div>
             <div className="bg-[#5AB6FF] rounded-2xl h-32 relative overflow-hidden p-4 shadow-sm flex items-center justify-center">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6 text-[#5AB6FF] fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                 </div>
             </div>
         </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[30px] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] px-8 py-4 flex justify-between items-center z-50">
        <div className="flex flex-col items-center gap-1 text-[#55B978]">
            <NavIcons.Home className="w-6 h-6" />
            <span className="text-xs font-bold">Home</span>
        </div>
        <Link href="/map" className="flex flex-col items-center gap-1 text-gray-300">
            <NavIcons.Map className="w-6 h-6" />
            <span className="text-xs font-medium">Map</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-gray-300">
            <NavIcons.Resources className="w-6 h-6" />
             <span className="text-xs font-medium">Resources</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-300">
             <NavIcons.Profile className="w-6 h-6" />
             <span className="text-xs font-medium">Profile</span>
        </div>
      </div>
    </div>
  );
}


