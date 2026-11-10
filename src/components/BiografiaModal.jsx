import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  User, 
  Check, 
  Sparkles,
  BookMarked,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { biografiaFiles } from '../data/portfolioData';

export default function BiografiaModal({ isOpen, onClose }) {
  const [downloadingId, setDownloadingId] = useState(null);

  if (!isOpen) return null;

  const handleDownload = (file) => {
    setDownloadingId(file.id);
    const link = document.createElement('a');
    link.href = file.path;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  const handleDownloadAll = () => {
    biografiaFiles.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = file.path;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 400);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      
      {/* Modal Dialog */}
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#0b1e36] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-sky-600/30 text-sky-400">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-wider text-sky-400 font-bold">
                  Producciones Individuales
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Biografía Escolar
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 bg-slate-50">
          
          {/* Pedagogical Description */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-xs sm:text-sm text-sky-900 leading-relaxed">
            <p className="font-semibold text-sky-950 mb-1">
              Trayectorias formativas y reflexiones pedagógicas:
            </p>
            <p className="text-sky-800">
              Aquí puedes descargar por separado los documentos de Word con las biografías escolares desarrolladas por los integrantes de la cátedra para la materia <em>Metodología y Práctica de la Enseñanza</em>.
            </p>
          </div>

          {/* Cards for each Biografia file */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {biografiaFiles.map((file) => {
              const isDownloading = downloadingId === file.id;

              return (
                <div 
                  key={file.id}
                  className="bg-white rounded-xl border border-slate-200 hover:border-sky-300 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Badge and Size */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                        Word • {file.extension}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {file.size}
                      </span>
                    </div>

                    {/* Author & Title */}
                    <div className="flex items-start space-x-3 mb-2.5">
                      <div className="p-2 rounded-lg bg-sky-50 text-sky-600 group-hover:bg-sky-100 group-hover:scale-105 transition-all">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-sky-800 transition-colors">
                          {file.displayName}
                        </h4>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-0.5 font-medium">
                          <User className="w-3.5 h-3.5 text-sky-600" />
                          <span>Autor: <strong className="text-slate-700">{file.author}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Location / Region tag */}
                    <div className="flex items-center space-x-1 text-xs text-slate-500 mb-3 pl-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{file.region}</span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 italic leading-relaxed mb-4">
                      "{file.excerpt}"
                    </p>

                    {/* File name */}
                    <p className="text-[11px] font-mono text-slate-400 truncate mb-4">
                      {file.name}
                    </p>
                  </div>

                  {/* Individual Download Button */}
                  <button
                    onClick={() => handleDownload(file)}
                    disabled={isDownloading}
                    className={`w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:scale-102 active:scale-95 shadow-sm ${
                      isDownloading
                        ? 'bg-emerald-600'
                        : 'bg-[#0284c7] hover:bg-[#0369a1]'
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Descargando {file.displayName}...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Descargar {file.displayName}</span>
                      </>
                    )}
                  </button>

                </div>
              );
            })}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDownloadAll}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-102 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Ambos Archivos (.docx)</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
