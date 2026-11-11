import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  FileCheck, 
  Tv, 
  ExternalLink,
  BookOpen,
  Eye,
  ArrowLeft,
  Check
} from 'lucide-react';
import { allFiles } from '../data/portfolioData';

export default function PreviewModal({ isOpen, onClose, fileId, onOpenDownloadModal }) {
  const [activeFileId, setActiveFileId] = useState(fileId);
  const [downloadingId, setDownloadingId] = useState(null);

  useEffect(() => {
    setActiveFileId(fileId);
  }, [fileId, isOpen]);

  if (!isOpen || !fileId) return null;

  const file = allFiles.find(f => f.id === activeFileId) || allFiles.find(f => f.id === fileId) || allFiles[0];
  const isPresentationSection = file.relatedCardId === 'card-presentacion';
  const relatedFiles = file.relatedCardId
    ? allFiles.filter(f => f.relatedCardId === file.relatedCardId)
    : [file];

  const handleDownloadFile = (targetFile) => {
    setDownloadingId(targetFile.id);
    const link = document.createElement('a');
    link.href = targetFile.path;
    link.download = targetFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#0b1e36] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="p-2 rounded-xl bg-sky-600/30 text-sky-400 flex-shrink-0">
              {file.type === 'pdf' ? <FileCheck className="w-6 h-6" /> : file.type === 'ppt' ? <Tv className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold tracking-tight truncate">
                {file.displayName}
              </h3>
              <p className="text-xs text-sky-200">
                Formato: {file.extension} • Tamaño: {file.size}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
            {file.id !== fileId && (
              <button
                onClick={() => setActiveFileId(fileId)}
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-all duration-200"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          
          {file.type === 'pdf' ? (
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-slate-700">
                <span className="font-medium text-slate-800">
                  Visualizador interactivo de documento PDF
                </span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleDownloadFile(file)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar PDF</span>
                  </button>
                  <a 
                    href={file.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sky-600 hover:text-sky-700 font-semibold text-xs sm:text-sm"
                  >
                    <span>Abrir en pestaña nueva</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* PDF Embed */}
              <div className="w-full h-[58vh] bg-slate-200 rounded-xl overflow-hidden border border-slate-300 shadow-inner">
                <iframe
                  src={`${file.path}#view=FitH`}
                  title={file.displayName}
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          ) : (
            /* Word or PowerPoint Document Detail Card */
            <div className="space-y-5">
              
              <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className={`p-4 rounded-2xl flex-shrink-0 ${file.type === 'word' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                    {file.type === 'word' ? <FileText className="w-10 h-10" /> : <Tv className="w-10 h-10" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-2">
                      {file.category}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {file.displayName}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {file.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                      <div className="min-w-0">
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

              {/* Pedagogical info & Download Buttons Card */}
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 text-sm text-sky-900">
                <h5 className="font-bold flex items-center space-x-2 mb-2 text-sky-950">
                  <BookOpen className="w-4 h-4 text-sky-600" />
                  <span>Información del Recurso Didáctico</span>
                </h5>
                <p className="text-xs sm:text-sm text-sky-800 leading-relaxed mb-4">
                  Este recurso forma parte integral de las producciones evaluadas en la materia <strong>Metodología y Práctica de la Enseñanza en el Campo de la Seguridad</strong> (Escuela Superior de Gendarmería Nacional).
                </p>

                {/* Download Section */}
                {isPresentationSection || relatedFiles.length > 1 ? (
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-sky-900">
                      Selecciona el archivo que deseas descargar:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {relatedFiles.map((relFile) => {
                        const isDownloading = downloadingId === relFile.id;
                        const isPdf = relFile.type === 'pdf';

                        return (
                          <div
                            key={relFile.id}
                            className="bg-white rounded-xl border border-sky-200/80 p-3.5 shadow-xs flex flex-col justify-between gap-3"
                          >
                            <div className="min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border ${
                                    isPdf
                                      ? 'bg-red-50 text-red-700 border-red-200'
                                      : relFile.type === 'ppt'
                                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                                      : 'bg-blue-50 text-blue-700 border-blue-200'
                                  }`}
                                >
                                  {relFile.extension} • {relFile.size}
                                </span>
                                {isPdf && (
                                  <button
                                    onClick={() => setActiveFileId(relFile.id)}
                                    className="inline-flex items-center space-x-1 text-[11px] font-semibold text-sky-600 hover:text-sky-800 transition-colors"
                                    title="Previsualizar PDF"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>Ver PDF</span>
                                  </button>
                                )}
                              </div>
                              <p className="text-xs font-bold text-slate-900 leading-snug break-words">
                                {relFile.name.replace(/\.(pptx|pdf|docx)$/i, '')}
                              </p>
                            </div>

                            <button
                              onClick={() => handleDownloadFile(relFile)}
                              disabled={isDownloading}
                              className={`w-full inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:scale-102 active:scale-95 ${
                                isDownloading
                                  ? 'bg-emerald-600'
                                  : isPdf
                                  ? 'bg-rose-600 hover:bg-rose-700'
                                  : 'bg-[#0284c7] hover:bg-[#0369a1]'
                              }`}
                            >
                              {isDownloading ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>Descargando...</span>
                                </>
                              ) : (
                                <>
                                  <Download className="w-4 h-4" />
                                  <span>Descargar ({relFile.extension})</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-1">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenDownloadModal(file.id);
                        }}
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition-all duration-200"
                      >
                        <span>Ver todos los archivos del portafolio</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleDownloadFile(file)}
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
                )}
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 flex-shrink-0">
          <span className="text-xs text-slate-500 font-mono truncate max-w-md">
            {relatedFiles.length > 1 && file.id === fileId && file.type !== 'pdf'
              ? `${relatedFiles.length} archivos disponibles en esta sección`
              : file.name}
          </span>
          <div className="flex items-center space-x-2">
            {(relatedFiles.length <= 1 || file.type === 'pdf') && (
              <button
                onClick={() => handleDownloadFile(file)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-semibold shadow-sm transition-all duration-200 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Descargar</span>
              </button>
            )}
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
