'use client';

import React from 'react';
import Link from 'next/link';

// SVGs for Bottom Navigation (Reused)
const NavIcons = {
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  Map: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
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

// Lock Icon
const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 5a3 3 0 0 1 6 0v3H9V7z" />
  </svg>
);

const nodes = [
  { id: 1, title: 'Cell\nStructure', x: 25, y: 8, color: 'bg-[#6ECFA8]', icon: '🧬', status: 'unlocked' },
  { id: 2, title: 'Chemical\nBonds', x: 75, y: 18, color: 'bg-[#FFD562]', icon: '⚗️', status: 'locked' },
  { id: 3, title: 'Physics\nMath',   x: 85, y: 35, color: 'bg-[#5AB6FF]', icon: '⚛️', status: 'locked' },
  { id: 4, title: 'Complete\nBond',  x: 50, y: 45, color: 'bg-[#8B7EF8]', icon: '🎖️', status: 'locked' },
  { id: 5, title: 'English\nMath',   x: 15, y: 55, color: 'bg-[#FF7B7B]', icon: '💡', status: 'locked' },
  { id: 6, title: 'Chemical\nBonds', x: 45, y: 70, color: 'bg-[#FF7B7B]', icon: '🔴', status: 'locked' },
  { id: 7, title: 'Cell\nStructure', x: 80, y: 82, color: 'bg-[#5AB6FF]', icon: '🦠', status: 'locked' },
  { id: 8, title: 'Peter\nStructions',x: 50, y: 95, color: 'bg-[#6ECFA8]', icon: '😊', status: 'locked' },
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#FDF8EF] font-sans pb-24 overflow-x-hidden" style={{ fontFamily: 'var(--font-nunito)' }}>
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

      {/* Header */}
      <div className="pt-8 px-6 pb-4 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-[#55B978] h-4 rounded-full" style={{ width: '45%' }}></div>
        </div>
        
        <h1 className="text-xl font-extrabold text-center text-gray-800">
            Level 5: The Science Explorer
        </h1>
      </div>

      {/* Map Area */}
      <div className="relative w-full max-w-md mx-auto mt-4" style={{ height: '900px' }}>
         {/* SVG Path */}
         <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            {/* 
              This path needs to connect the nodes smoothly. 
              Coordinates are roughly based on percentage x and percentage y of 900px height.
              Let's approximate a bezier path.
            */}
            <path 
              d="
                M 100 70 
                Q 200 100 300 160
                T 340 315
                T 200 405
                T 60 495
                T 180 630
                T 320 738
                T 200 855
              "
              fill="none" 
              stroke="#E8DCC6" 
              strokeWidth="12" 
              strokeLinecap="round"
              strokeDasharray="20 10"
            />
         </svg>

         {/* Nodes */}
         {nodes.map((node) => (
           <div 
             key={node.id}
             className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
             style={{ left: `${node.x}%`, top: `${node.y}%` }}
           >
              {/* Node Circle */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white relative transition-transform hover:scale-105 cursor-pointer ${node.status === 'locked' ? 'opacity-80' : ''} ${node.color}`}>
                  {node.status === 'locked' && (
                      <div className="absolute inset-0 bg-black/10 rounded-full flex items-center justify-center">
                          <div className="bg-white/30 rounded-full p-1">
                            <LockIcon className="w-6 h-6 text-white" />
                          </div>
                      </div>
                  )}
                  <span className="text-3xl filter drop-shadow-sm">{node.icon}</span>
              </div>
              
              {/* Title */}
              <span className="mt-2 text-center text-sm font-bold text-gray-700 leading-tight whitespace-pre-line drop-shadow-sm bg-white/60 backdrop-blur-sm px-2 py-1 rounded-md">
                {node.title}
              </span>
           </div>
         ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[30px] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] px-8 py-4 flex justify-between items-center z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-300 hover:text-[#55B978] transition-colors">
            <NavIcons.Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-[#55B978]">
            <NavIcons.Map className="w-6 h-6" />
            <span className="text-xs font-bold">Map</span>
        </div>
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

