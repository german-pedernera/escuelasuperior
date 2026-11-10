import React, { useState, useMemo } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  FileCheck, 
  Tv, 
  Search, 
  Check, 
  Sparkles,
  FolderDown,
  ExternalLink,
  Eye
} from 'lucide-react';
import { allFiles } from '../data/portfolioData';

export default function DownloadModal({ isOpen, onClose, preselectedFileId, sourceCard, onPreview }) {
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingId, setDownloadingId] = useState(null);

  // Filter files based on format and search query
  const filteredFiles = useMemo(() => {
    return allFiles.filter((file) => {
      const matchesFormat = selectedFormat === 'all' || file.type === selectedFormat;
      const matchesSearch = 
        file.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFormat && matchesSearch;
    });
  }, [selectedFormat, searchQuery]);

  if (!isOpen) return null;

  const handleDownload = (file) => {
    setDownloadingId(file.id);
    
    // Create an anchor and trigger actual download
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

  const getFormatBadge = (type, extension) => {
    switch (type) {
      case 'word':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
            Word • {extension}
          </span>
        );
      case 'pdf':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 border border-red-200">
            PDF • {extension}
          </span>
        );
      case 'ppt':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
            PowerPoint • {extension}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-700">
            {extension}
          </span>
        );
    }
  };

  const getFormatIcon = (type) => {
    switch (type) {
      case 'word':
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 'pdf':
        return <FileCheck className="w-6 h-6 text-red-600" />;
      case 'ppt':
        return <Tv className="w-6 h-6 text-amber-600" />;
      default:
        return <FileText className="w-6 h-6 text-slate-600" />;
    }
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
              <FolderDown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Centro de Descarga de Archivos
              </h3>
              <p className="text-xs text-sky-200">
                {sourceCard ? (
                  <span>Sección seleccionada: <strong className="text-white">{sourceCard.title}</strong></span>
                ) : (
                  <span>Todos los activos de Word, PDF y PowerPoint disponibles</span>
                )}
              </p>
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

        {/* Filters and Search Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 space-y-3">
          
          {/* Format Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'Todos', count: allFiles.length },
              { id: 'pdf', label: 'PDF', count: allFiles.filter(f => f.type === 'pdf').length },
              { id: 'word', label: 'Word (.docx)', count: allFiles.filter(f => f.type === 'word').length },
              { id: 'ppt', label: 'PowerPoint (.pptx)', count: allFiles.filter(f => f.type === 'ppt').length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFormat(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  selectedFormat === tab.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {tab.label} <span className="opacity-75">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar archivo por nombre, tema o contenido..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-800"
            />
          </div>

        </div>

        {/* Files List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          
          {filteredFiles.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No se encontraron archivos que coincidan con la búsqueda.
            </div>
          ) : (
            filteredFiles.map((file) => {
              const isRecommended = preselectedFileId === file.id;
              const isDownloading = downloadingId === file.id;

              return (
                <div
                  key={file.id}
                  className={`rounded-xl border p-4 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isRecommended
                      ? 'bg-sky-50/70 border-sky-300 ring-1 ring-sky-400/40 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  {/* File Metadata */}
                  <div className="flex items-start space-x-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0 mt-0.5">
                      {getFormatIcon(file.type)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {getFormatBadge(file.type, file.extension)}
                        <span className="text-xs text-slate-400 font-medium">
                          {file.size}
                        </span>
                        {isRecommended && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-sky-600 text-white shadow-xs">
                            <Sparkles className="w-3 h-3 mr-1" /> Recomendado
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {file.displayName}
                      </h4>

                      <p className="text-xs text-slate-500 font-mono truncate mt-0.5">
                        {file.name}
                      </p>

                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {file.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 sm:self-center flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    
                    {/* Preview Button */}
                    <button
                      onClick={() => {
                        onClose();
                        if (onPreview) onPreview(file.id);
                      }}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-all duration-200 hover:scale-105"
                      title="Ver vista previa"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(file)}
                      disabled={isDownloading}
                      className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm ${
                        isDownloading
                          ? 'bg-emerald-600'
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
                          <span>Descargar</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })
          )}

        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>
            Archivos originales alojados en la carpeta <strong>DARIO</strong> (Word, PDF, PowerPoint).
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}

