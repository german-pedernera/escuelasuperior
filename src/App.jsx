import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickNav from './components/QuickNav';
import AboutSidebar from './components/AboutSidebar';
import EvidenceGrid from './components/EvidenceGrid';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import PreviewModal from './components/PreviewModal';
import InfoModal from './components/InfoModal';
import BiografiaModal from './components/BiografiaModal';
import VideoModal from './components/VideoModal';
import { Download, Sparkles } from 'lucide-react';
import { evidenceCards } from './data/portfolioData';

export default function App() {
  // Modal states
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [preselectedFileId, setPreselectedFileId] = useState(null);
  const [sourceCard, setSourceCard] = useState(null);

  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewFileId, setPreviewFileId] = useState(null);

  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState('bibliografia');

  const [biografiaModalOpen, setBiografiaModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('all');

  // Open download modal with optional preselection and source card
  const handleOpenDownloadModal = (fileId = null, card = null) => {
    setPreselectedFileId(fileId);
    setSourceCard(card);
    setDownloadModalOpen(true);
  };

  // Open preview modal
  const handleOpenPreview = (fileId) => {
    setPreviewFileId(fileId);
    setPreviewModalOpen(true);
  };

  // Navigation handler
  const handleNavigate = (linkId, targetCardId) => {
    if (linkId === 'bibliografia' || linkId === 'conclusiones') {
      setInfoModalType(linkId);
      setInfoModalOpen(true);
      return;
    }

    if (linkId === 'reflexiones') {
      setBiografiaModalOpen(true);
      return;
    }

    if (linkId === 'biografia-escolar') {
      setBiografiaModalOpen(true);
      return;
    }

    if (targetCardId) {
      const el = document.getElementById(targetCardId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-sky-400', 'transition-all');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-sky-400');
        }, 1500);
      }
      return;
    }

    if (linkId === 'planificacion') {
      const el = document.getElementById('card-planificacion');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (linkId === 'practica') {
      const el = document.getElementById('card-presentacion');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (linkId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // QuickNav selection handler
  const handleQuickNavSelect = (sectionId, targetCardId) => {
    setActiveSection(sectionId);
    if (targetCardId) {
      const el = document.getElementById(targetCardId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-sky-400', 'transition-all');
        setTimeout(() => {
          el.classList.remove('ring-4', 'ring-sky-400');
        }, 1500);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f8] text-slate-800 font-sans">
      
      {/* 1. Top Navbar */}
      <Navbar 
        onOpenDownloadModal={() => handleOpenDownloadModal()} 
        onOpenBiografiaModal={() => setBiografiaModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Quick Navigation Bar */}
      <QuickNav 
        activeSection={activeSection}
        onSelectSection={handleQuickNavSelect}
      />

      {/* 4. Main Body: Responsive 2-column Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column (Desktop 4/12, Mobile 12/12): Sobre este portafolio & Práctica de enseñanza */}
          <div className="lg:col-span-4 space-y-6">
            <AboutSidebar 
              onOpenDownloadModal={handleOpenDownloadModal}
              onSelectPreview={handleOpenPreview}
            />
          </div>

          {/* Right Column (Desktop 8/12, Mobile 12/12): Producciones y evidencias (6 cards) */}
          <div className="lg:col-span-8">
            <EvidenceGrid 
              onOpenDownloadModal={handleOpenDownloadModal}
              onSelectPreview={handleOpenPreview}
              onOpenVideoModal={() => setVideoModalOpen(true)}
            />
          </div>

        </div>
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        preselectedFileId={preselectedFileId}
        sourceCard={sourceCard}
        onPreview={handleOpenPreview}
      />

      <PreviewModal
        isOpen={previewModalOpen}
        onClose={() => setPreviewModalOpen(false)}
        fileId={previewFileId}
        onOpenDownloadModal={handleOpenDownloadModal}
      />

      <InfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        type={infoModalType}
      />

      <BiografiaModal
        isOpen={biografiaModalOpen}
        onClose={() => setBiografiaModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Floating Download Button (Mobile / Desktop Quick Access) */}
      <aside aria-label="Acceso rápido" className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => handleOpenDownloadModal()}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold shadow-xl border-2 border-white/80 transition-all duration-300 hover:scale-110 active:scale-95 group"
          title="Descargar archivos (Word, PDF, PPT)"
        >
          <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">Descargas</span>
        </button>
      </aside>

    </div>
  );
}

