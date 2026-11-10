import React from 'react';
import { 
  FileText, 
  ClipboardCheck, 
  Tv, 
  Scale, 
  Edit3, 
  Eye, 
  Download, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { evidenceCards } from '../data/portfolioData';

export default function EvidenceGrid({ onOpenDownloadModal, onSelectPreview }) {
  
  const getCardIcon = (iconName) => {
    switch (iconName) {
      case 'file-text':
        return <FileText className="w-7 h-7 text-sky-600 stroke-[1.8]" />;
      case 'clipboard-check':
        return <ClipboardCheck className="w-7 h-7 text-sky-600 stroke-[1.8]" />;
      case 'presentation':
        return <Tv className="w-7 h-7 text-sky-600 stroke-[1.8]" />;
      case 'scale':
        return <Scale className="w-7 h-7 text-sky-600 stroke-[1.8]" />;
      case 'edit-3':
        return <Edit3 className="w-7 h-7 text-sky-600 stroke-[1.8]" />;
      default:
        return <FileText className="w-7 h-7 text-sky-600 stroke-[1.8]" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with Title and Blue Underline Accent */}
      <div className="border-b-2 border-slate-200 pb-3">
        <div className="inline-block relative">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Producciones y evidencias
          </h2>
          <div className="h-1 w-20 bg-sky-600 rounded-full mt-1.5"></div>
        </div>
      </div>

      {/* Grid of Evidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {evidenceCards.map((card) => (
          <div
            id={card.id}
            key={card.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200/90 p-5 flex flex-col justify-between hover:shadow-md hover:border-sky-300 transition-all duration-300 group"
          >
            <div>
              {/* Card Header: Icon & Titles */}
              <div className="flex items-start space-x-3.5 mb-3">
                <div className="p-2 rounded-xl bg-sky-50 border border-sky-100 group-hover:bg-sky-100 group-hover:scale-105 transition-all duration-200 flex-shrink-0">
                  {getCardIcon(card.icon)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-sky-800 transition-colors">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Body: Description or Bullets */}
              <div className="text-xs sm:text-sm text-slate-600 mb-5 min-h-[44px]">
                {card.description && (
                  <p className="leading-relaxed">
                    {card.description}
                  </p>
                )}

                {card.bullets && (
                  <ul className="space-y-1.5 text-slate-600 pl-1">
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0"></span>
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Bottom Actions: [Ver] and [Descargar] */}
            <div className="pt-3 border-t border-slate-100 flex items-center space-x-2.5">
              
              {/* Ver Button */}
              <button
                onClick={() => onSelectPreview(card.primaryFileId, card)}
                className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 border border-sky-200/80 transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
                title="Vista previa y detalles del documento"
              >
                <Eye className="w-4 h-4 text-sky-600 group-hover/btn:scale-110 transition-transform" />
                <span>Ver</span>
              </button>

              {/* Descargar Button */}
              <button
                onClick={() => onOpenDownloadModal(card.primaryFileId, card)}
                className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-95 group/btn"
                title="Elegir y descargar archivo (Word, PDF, PPT)"
              >
                <Download className="w-4 h-4 text-white group-hover/btn:translate-y-0.5 transition-transform" />
                <span>Descargar</span>
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

