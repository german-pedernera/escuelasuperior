import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-[#061524] via-[#0b2138] to-[#122e4c] text-white overflow-hidden shadow-md">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-500 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headings & Metadata */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4">
            
            {/* Tagline with vertical cyan bar */}
            <div className="border-l-4 border-sky-400 pl-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
                {portfolioInfo.subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {portfolioInfo.title}
            </h1>

            {/* Period Badge */}
            <div className="pt-1">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium bg-[#e0f2fe] text-[#0369a1] shadow-sm">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#0284c7]" />
                {portfolioInfo.period}
              </span>
            </div>

            {/* Authors */}
            <div className="flex items-center text-slate-200 text-sm sm:text-base font-medium pt-1">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mr-2.5 text-sky-300">
                <Users className="w-4 h-4" />
              </div>
              <span>
                <strong className="text-white font-semibold">Integrantes:</strong> {portfolioInfo.authors}
              </span>
            </div>

          </div>

          {/* Right Column: Hero Graphic (Escuela Superior Emblem) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Soft decorative shadow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400/30 via-amber-400/20 to-blue-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500 opacity-80"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-white p-4 sm:p-5 flex flex-col items-center text-center">
                <div className="w-44 sm:w-52 h-auto flex items-center justify-center py-1">
                  <img 
                    src="/images/escuela_superior.jpg" 
                    alt="Escuela Superior de Gendarmería Nacional - Grl Br D Manuel M. Calderón" 
                    className="w-full h-auto object-contain max-h-56 filter drop-shadow transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200/80 w-full">
                  <span className="text-xs font-bold text-slate-800 tracking-wide block uppercase">
                    Escuela Superior de Gendarmería
                  </span>
                  <span className="text-[11px] font-semibold text-sky-800 italic block mt-0.5">
                    "Saber para hacer"
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

