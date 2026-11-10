import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  Download, 
  Menu, 
  X, 
  FileText, 
  ExternalLink 
} from 'lucide-react';

export default function Navbar({ onOpenDownloadModal, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [observationsOpen, setObservationsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

  const navLinks = [
    { id: 'inicio', label: 'Inicio', hasDropdown: false },
    { id: 'planificacion', label: 'Planificación', hasDropdown: false },
    { 
      id: 'observaciones', 
      label: 'Observaciones', 
      hasDropdown: true,
      subItems: [
        { id: 'obs-1', label: 'Observación 1: Derecho Procesal Penal', target: 'card-observacion-1' },
        { id: 'obs-2', label: 'Observación 2: Ética y DD.HH.', target: 'card-observacion-2' },
        { id: 'obs-doc', label: 'Protocolo e Informe Completo (PDF)', fileId: 'observaciones' }
      ]
    },
    { id: 'practica', label: 'Práctica Docente', hasDropdown: false },
    { id: 'reflexiones', label: 'Reflexiones', hasDropdown: false },
    { id: 'conclusiones', label: 'Conclusiones', hasDropdown: false },
    { id: 'bibliografia', label: 'Bibliografía', hasDropdown: false }
  ];

  const handleLinkClick = (id, target) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setObservationsOpen(false);
    if (onNavigate) {
      onNavigate(id, target);
    }
  };

  return (
    <header className="bg-[#0b1e36] text-white sticky top-0 z-40 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleLinkClick('inicio')}>
            <div className="p-2 rounded-lg bg-sky-600/30 text-sky-400 group-hover:bg-sky-600/50 group-hover:text-sky-300 transition-all duration-200">
              <BookOpen className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-semibold text-lg md:text-xl tracking-tight text-slate-100 group-hover:text-white transition-colors">
              Portafolio Académico
            </span>
            <span className="hidden sm:inline-block text-slate-600 text-lg">|</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.id} 
                    className="relative"
                    onMouseEnter={() => setObservationsOpen(true)}
                    onMouseLeave={() => setObservationsOpen(false)}
                  >
                    <button
                      onClick={() => setObservationsOpen(!observationsOpen)}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-all duration-200 ${
                        isActive 
                          ? 'bg-sky-600 text-white shadow-sm' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${observationsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {observationsOpen && (
                      <div className="absolute left-0 mt-1 w-64 bg-[#0d2542] rounded-xl shadow-2xl border border-slate-700 py-2 z-50 animate-fadeIn">
                        {link.subItems.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (sub.target) {
                                handleLinkClick('observaciones', sub.target);
                              } else if (sub.fileId) {
                                onOpenDownloadModal(sub.fileId);
                                setObservationsOpen(false);
                              }
                            }}
                            className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-slate-300 hover:text-white hover:bg-sky-600/30 flex items-center space-x-2 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                            <span className="flex-1 truncate">{sub.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-sky-600 text-white font-semibold shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80 hover:scale-105'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Documentos / Descargas Button */}
            <button
              onClick={() => onOpenDownloadModal()}
              className="ml-2 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/90 hover:bg-sky-600 text-sky-300 hover:text-white border border-slate-700 hover:border-sky-500 shadow-sm transition-all duration-200 hover:scale-105 group"
              title="Descargar archivos del portafolio (Word, PDF, PPT)"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span className="font-semibold">Documentos</span>
            </button>
          </nav>

          {/* Mobile Right Controls: Documents + Hamburger Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => onOpenDownloadModal()}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Archivos</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d2542] border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <div key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === link.id
                    ? 'bg-sky-600 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.label}
              </button>
              {link.hasDropdown && (
                <div className="pl-4 mt-1 space-y-1 border-l-2 border-slate-700 ml-3">
                  {link.subItems.map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => {
                        if (sub.target) {
                          handleLinkClick('observaciones', sub.target);
                        } else if (sub.fileId) {
                          onOpenDownloadModal(sub.fileId);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="w-full text-left py-1.5 px-2 text-xs text-slate-400 hover:text-sky-300 block"
                    >
                      • {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-3 border-t border-slate-700/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Explorar y Descargar Todos los Archivos</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

