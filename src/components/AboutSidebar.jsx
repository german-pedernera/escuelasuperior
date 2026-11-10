import React from 'react';
import { GraduationCap, BookOpen, Layers, CheckCircle2, FileCheck } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

export default function AboutSidebar({ onOpenDownloadModal, onSelectPreview }) {
  const { teachingPractice } = portfolioInfo;

  return (
    <div className="space-y-6">
      
      {/* Card 1: Sobre este portafolio */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="p-5">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-2.5">
            Sobre este portafolio
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {portfolioInfo.overview}
          </p>
          
          {/* Classroom Image */}
          <div className="relative rounded-lg overflow-hidden border border-slate-100 shadow-inner group">
            <img 
              src="/images/classroom.png" 
              alt="Clase presencial y práctica docente" 
              className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Card 2: Práctica de enseñanza */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200/90 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="p-5">
          
          {/* Header with Cap Icon */}
          <div className="flex items-start space-x-3 mb-4">
            <div className="p-2 rounded-lg bg-sky-100 text-sky-700 flex-shrink-0">
              <GraduationCap className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                Práctica de enseñanza
              </h2>
              <p className="text-xs text-sky-800 font-semibold mt-0.5">
                Asignatura: {teachingPractice.subject}
              </p>
            </div>
          </div>

          {/* Details list */}
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-2 border-t border-slate-100">
            <div>
              <span className="font-semibold text-slate-900">Tema: </span>
              <span className="text-slate-600">{teachingPractice.topic}</span>
            </div>

            <div>
              <span className="font-semibold text-slate-900">Estrategia: </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {teachingPractice.strategy}
              </span>
            </div>

            <div>
              <span className="font-semibold text-slate-900">Caso práctico: </span>
              <span className="text-slate-700 italic font-medium">{teachingPractice.caseStudy}</span>
            </div>
          </div>

          {/* Quick action buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-2">
            <button
              onClick={() => onSelectPreview('plan-clase')}
              className="flex-1 text-center py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-sky-50 text-sky-700 border border-slate-200 hover:border-sky-300 text-xs font-semibold transition-all duration-200 hover:scale-102"
            >
              Ver Plan de Clase
            </button>
            <button
              onClick={() => onOpenDownloadModal('caso-caligrafo')}
              className="flex-1 text-center py-1.5 px-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-102"
            >
              Caso Práctico
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

