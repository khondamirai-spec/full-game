'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { 
  Home as HomeIcon, 
  Map as MapIcon, 
  BookOpen, 
  User, 
  Pencil, 
  FlaskConical, 
  Play, 
  Heart, 
  Star,
  Lock,
  Check,
  Flame,
  Trophy,
  Zap,
  Bell,
  Sparkles,
  Atom,
  Smile
} from 'lucide-react';

// Level data configuration
const levels = [
  { id: 1, name: 'Beginner', color: '#6ECFA8', icon: Pencil },
  { id: 2, name: 'Medium', color: '#FFD562', icon: FlaskConical },
  { id: 3, name: 'Pro', color: '#8B7EF8', icon: Star },
  { id: 4, name: 'Expert', color: '#FF7B7B', icon: FlaskConical },
  { id: 5, name: 'Master', color: '#5AB6FF', icon: BookOpen },
  { id: 6, name: 'Atoms', color: '#F59E0B', icon: FlaskConical },
  { id: 7, name: 'Bonds', color: '#EC4899', icon: Pencil },
  { id: 8, name: 'Reactions', color: '#10B981', icon: Play },
  { id: 9, name: 'Elements', color: '#6366F1', icon: Star },
  { id: 10, name: 'Lab', color: '#14B8A6', icon: FlaskConical },
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Track unlocked levels - only first level is unlocked initially
  // In the future, you can save this to localStorage or a database
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const isLevelUnlocked = (levelId: number) => unlockedLevels.includes(levelId);
  const isLevelCompleted = (levelId: number) => completedLevels.includes(levelId);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Multiply for faster scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse events for desktop drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <div className="min-h-screen bg-[#FDF8EF] font-sans pb-24 overflow-x-hidden" style={{ fontFamily: 'var(--font-nunito)' }}>
      {/* Top Header Section */}
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#A78BFA] pt-10 pb-16 px-6 rounded-b-[48px] relative">
          
          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-20 left-4 w-16 h-16 bg-pink-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 right-12 w-20 h-20 bg-cyan-400/15 rounded-full blur-xl"></div>
          
          {/* Floating Atoms */}
          <Atom className="absolute top-16 right-6 w-6 h-6 text-white/20 animate-pulse" />
          <Sparkles className="absolute top-24 left-8 w-5 h-5 text-yellow-300/40" />
          
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center border-3 border-white/30 shadow-lg overflow-hidden rotate-3">
                  <User className="w-8 h-8 text-white" />
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-white">
                <p className="text-white/70 text-xs font-medium">Good morning 👋</p>
                <h2 className="font-bold text-xl leading-tight">Peter Haltermy</h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                <Bell className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex gap-3 mb-4 relative z-10">
            {/* Streak */}
            <div className="flex-1 bg-white/15 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-[10px] font-medium uppercase tracking-wide">Streak</p>
                  <p className="text-white font-bold text-lg leading-none">7 Days</p>
                </div>
              </div>
            </div>
            
            {/* XP Points */}
            <div className="flex-1 bg-white/15 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-[10px] font-medium uppercase tracking-wide">XP Points</p>
                  <p className="text-white font-bold text-lg leading-none">2,450</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="px-6 mt-6">
        
        {/* Featured Games Section 1 */}
        <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-extrabold text-gray-800">Featured Games</h2>
            <span className="text-gray-400 text-sm font-bold cursor-pointer hover:text-gray-600">See All</span>
        </div>

        <div 
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto pb-4 no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
            {levels.map((level) => {
              const IconComponent = level.icon;
              const unlocked = isLevelUnlocked(level.id);
              const completed = isLevelCompleted(level.id);
              
              return (
                <div 
                  key={level.id}
                  className={`min-w-[160px] w-[160px] rounded-[32px] p-4 aspect-[4/5] relative flex flex-col items-center justify-center shadow-sm shrink-0 transition-all duration-300 ${
                    unlocked 
                      ? 'cursor-pointer hover:scale-105 active:scale-95' 
                      : 'cursor-not-allowed'
                  }`}
                  style={{ 
                    backgroundColor: unlocked ? level.color : '#9CA3AF',
                    filter: unlocked ? 'none' : 'grayscale(30%)'
                  }}
                  onClick={() => {
                    if (unlocked) {
                      // Navigate to level - you can add your game logic here
                      console.log(`Playing level: ${level.name}`);
                    }
                  }}
                >
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                    unlocked ? 'bg-white/20' : 'bg-black/10'
                  }`}>
                    {unlocked ? (
                      <IconComponent className="w-10 h-10 text-white fill-white/20" />
                    ) : (
                      <Lock className="w-10 h-10 text-white/70" />
                    )}
                  </div>
                  
                  {/* Level Name */}
                  <h3 className={`px-6 py-2 rounded-full font-bold text-sm shadow-sm ${
                    unlocked 
                      ? 'bg-white/90 text-gray-800' 
                      : 'bg-white/50 text-gray-500'
                  }`}>
                    {level.name}
                  </h3>
                  
                  {/* Top Right Badge */}
                  <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
                    unlocked ? 'bg-white/20' : 'bg-black/10'
                  }`}>
                    {completed ? (
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    ) : unlocked ? (
                      <Heart className="w-4 h-4 text-white fill-white" />
                    ) : (
                      <Lock className="w-4 h-4 text-white/50" />
                    )}
                  </div>

                  {/* Locked Overlay */}
                  {!unlocked && (
                    <div className="absolute inset-0 rounded-[32px] bg-black/20 flex items-center justify-center">
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="text-white/80 text-xs font-semibold bg-black/30 px-3 py-1 rounded-full">
                          Complete Level {level.id - 1}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Level Number Badge */}
                  <div className={`absolute top-4 left-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    unlocked 
                      ? 'bg-white/90 text-gray-700' 
                      : 'bg-white/40 text-gray-500'
                  }`}>
                    {level.id}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Featured Games Section 2 */}
         <div className="flex justify-between items-end mb-4 mt-2">
            <h2 className="text-xl font-extrabold text-gray-800">Featured Games</h2>
            <span className="text-gray-400 text-sm font-bold cursor-pointer hover:text-gray-600">See all</span>
        </div>
        
         <div className="grid grid-cols-2 gap-4">
             <div className="bg-[#FF7B7B] rounded-[24px] h-36 relative overflow-hidden p-4 shadow-sm flex flex-col justify-end items-center">
                 <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Smile className="w-12 h-12 text-white" />
                 </div>
             </div>
             <div className="bg-[#5AB6FF] rounded-[24px] h-36 relative overflow-hidden p-4 shadow-sm flex items-center justify-center">
                 {/* Cloud shapes */}
                 <div className="absolute top-4 left-4">
                    <div className="w-8 h-4 bg-white/30 rounded-full"></div>
                 </div>
                 <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-5 bg-white/30 rounded-full"></div>
                 </div>
                 
                 <div className="w-14 h-14 bg-[#55B978] rounded-2xl rotate-[-10deg] flex items-center justify-center shadow-sm z-10">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                 </div>
                 <div className="absolute w-12 h-12 bg-[#FF7B7B] rounded-xl rotate-[15deg] translate-x-8 translate-y-4"></div>
             </div>
         </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[30px] shadow-[0_-5px_20px_rgba(0,0,0,0.05)] px-8 py-4 flex justify-between items-center z-50">
        <div className="flex flex-col items-center gap-1 text-[#55B978]">
            <HomeIcon className="w-6 h-6 stroke-[2.5]" />
            <span className="text-xs font-bold">Home</span>
        </div>
        <Link href="/map" className="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-400 transition-colors">
            <MapIcon className="w-6 h-6 stroke-[2.5]" />
            <span className="text-xs font-medium">Map</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">
            <BookOpen className="w-6 h-6 stroke-[2.5]" />
             <span className="text-xs font-medium">Resources</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">
             <User className="w-6 h-6 stroke-[2.5]" />
             <span className="text-xs font-medium">Profile</span>
        </div>
      </div>
    </div>
  );
}
