import React from 'react';
import { X, Play, ExternalLink, Film, BookOpen } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoId = "FPfQRVlXwXE", videoUrl = "https://youtube.com/shorts/FPfQRVlXwXE?si=PcwbWMy00q2VwAaR" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      
      {/* Modal Dialog */}
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#0b1e36] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="p-2 rounded-xl bg-rose-600/30 text-rose-400 flex-shrink-0">
              <Film className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] uppercase tracking-wider text-rose-300 font-bold block truncate">
                Caso Práctico: “La firma dudosa”
              </span>
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-white truncate">
                Video Demostrativo Pericial
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
            aria-label="Cerrar video"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="p-4 sm:p-6 bg-slate-900 flex flex-col items-center justify-center">
          <div className="w-full max-w-[320px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 relative">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Caso Práctico: La firma dudosa"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Description & Footer Controls */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3">
          <p className="text-xs text-slate-600 leading-relaxed">
            Material audiovisual pericial caligráfico utilizado durante la exposición didáctica de medidas de coerción y medios de prueba.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-102 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Ver en YouTube Shorts</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
