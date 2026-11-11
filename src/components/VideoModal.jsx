import React from 'react';
import { X, Download, Film } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoSrc = "/archivos/video.mp4" }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      
      {/* Modal Dialog */}
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#0b1e36] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800 flex-shrink-0">
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
        <div className="p-4 sm:p-6 bg-slate-900 flex flex-col items-center justify-center overflow-hidden flex-1">
          <video
            src={videoSrc}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="max-h-[62vh] w-auto max-w-full rounded-xl shadow-2xl border border-slate-700/80 bg-black focus:outline-none"
          >
            Tu navegador no soporta la reproducción de video HTML5.
          </video>
        </div>

        {/* Description & Footer Controls */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3 flex-shrink-0">
          <p className="text-xs text-slate-600 leading-relaxed">
            Material audiovisual pericial caligráfico utilizado durante la exposición didáctica de medidas de coerción y medios de prueba.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1">
            <a
              href={videoSrc}
              download="Caso_Practico_La_Firma_Dudosa.mp4"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Video (MP4)</span>
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
