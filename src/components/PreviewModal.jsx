import React from 'react';
import { 
  X, 
  Download, 
  FileText, 
  FileCheck, 
  Tv, 
  ExternalLink,
  BookOpen,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { allFiles } from '../data/portfolioData';

export default function PreviewModal({ isOpen, onClose, fileId, onOpenDownloadModal }) {
  if (!isOpen || !fileId) return null;

  const file = allFiles.find(f => f.id === fileId) || allFiles[0];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file.path;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#0b1e36] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-sky-600/30 text-sky-400">
              {file.type === 'pdf' ? <FileCheck className="w-6 h-6" /> : file.type === 'ppt' ? <Tv className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight truncate max-w-md sm:max-w-xl">
                {file.displayName}
              </h3>
              <p className="text-xs text-sky-200">
                Formato: {file.extension} • Tamaño: {file.size}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          
          {file.type === 'pdf' ? (
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between text-xs sm:text-sm text-slate-700">
                <span className="font-medium text-slate-800">
                  Visualizador interactivo de documento PDF
                </span>
                <a 
                  href={file.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-sky-600 hover:text-sky-700 font-semibold"
                >
                  <span>Abrir en pestaña nueva</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* PDF Embed */}
              <div className="w-full h-[60vh] bg-slate-200 rounded-xl overflow-hidden border border-slate-300 shadow-inner">
                <iframe
                  src={`${file.path}#view=FitH`}
                  title={file.displayName}
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          ) : (
            /* Word or PowerPoint Document Detail Card */
            <div className="space-y-6">
              
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-2xl ${file.type === 'word' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                    {file.type === 'word' ? <FileText className="w-10 h-10" /> : <Tv className="w-10 h-10" />}
                  </div>

                  <div className="flex-1">
                    <span className="inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-2">
                      {file.category}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {file.displayName}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {file.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                      <div>
                        <strong>Nombre de archivo:</strong>
                        <p className="font-mono text-slate-700 truncate mt-0.5">{file.name}</p>
                      </div>
                      <div>
                        <strong>Tamaño en disco:</strong>
                        <p className="text-slate-700 mt-0.5">{file.size}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pedagogical info card */}
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 text-sm text-sky-900">
                <h5 className="font-bold flex items-center space-x-2 mb-2 text-sky-950">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <span>Información del Recurso Didáctico</span>
                </h5>
                <p className="text-xs sm:text-sm text-sky-800 leading-relaxed">
                  Este recurso forma parte integral de las producciones evaluadas en la materia <strong>Metodología y Práctica de la Enseñanza en el Campo de la Seguridad</strong> (Escuela Superior de Gendarmería Nacional).
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar archivo ({file.extension})</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenDownloadModal(file.id);
                    }}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition-all duration-200"
                  >
                    <span>Ver otros formatos o archivos</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono truncate max-w-sm">
            {file.name}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Descargar</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

