import React from 'react';
import { GraduationCap, Calendar, Users, Shield } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#08182b] text-slate-300 border-t border-slate-800 py-6 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop single-line with separators / Mobile responsive flex-col */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
          
          {/* Institution with Shield Emblem */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-slate-800/80 p-0.5 border border-slate-700/80">
              <img 
                src="/images/shield_logo.png" 
                alt="Escuela Superior de Gendarmería Nacional" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<span class="text-sky-400 font-bold text-xs">GN</span>';
                }}
              />
            </div>
            <span className="font-bold text-white tracking-tight">
              {portfolioInfo.institution}
            </span>
          </div>

          <span className="hidden lg:inline-block text-slate-600 font-light select-none">|</span>

          {/* Subject with Graduation Cap */}
          <div className="flex items-center space-x-2 text-center lg:text-left">
            <div className="p-1 rounded bg-white/10 text-sky-400 flex-shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span>
              <strong className="text-white font-medium">Materia:</strong> {portfolioInfo.title}
            </span>
          </div>

          <span className="hidden lg:inline-block text-slate-600 font-light select-none">|</span>

          {/* Period with Calendar */}
          <div className="flex items-center space-x-2">
            <div className="p-1 rounded bg-white/10 text-sky-400 flex-shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-slate-300 font-medium">
              {portfolioInfo.period}
            </span>
          </div>

          <span className="hidden lg:inline-block text-slate-600 font-light select-none">|</span>

          {/* Authors with Users */}
          <div className="flex items-center space-x-2">
            <div className="p-1 rounded bg-white/10 text-sky-400 flex-shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-slate-200 font-medium">
              {portfolioInfo.authors}
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

