import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomeView } from './views/HomeView';
import type { TabKey } from './types';

const OccupationalHealthView = lazy(() =>
  import('./views/OccupationalHealthView').then((m) => ({ default: m.OccupationalHealthView }))
);
const TaxAdvisoryView = lazy(() =>
  import('./views/TaxAdvisoryView').then((m) => ({ default: m.TaxAdvisoryView }))
);
const CorporateLegalView = lazy(() =>
  import('./views/CorporateLegalView').then((m) => ({ default: m.CorporateLegalView }))
);
const AboutView = lazy(() =>
  import('./views/AboutView').then((m) => ({ default: m.AboutView }))
);
const ContactView = lazy(() =>
  import('./views/ContactView').then((m) => ({ default: m.ContactView }))
);

const VALID_TABS: readonly TabKey[] = [
  'inicio',
  'nosotros',
  'seguridad-salud',
  'asesoria-tributaria',
  'asesoria-legal',
  'contacto',
  'servicios-contables',
  'servicios-tributarios',
];

export const App: React.FC = () => {
  const getTabFromUrl = (): TabKey => {
    const hash = window.location.hash.replace(/^#/, '').toLowerCase();
    if (hash === 'servicios-contables') return 'seguridad-salud';
    if (hash === 'servicios-tributarios') return 'asesoria-tributaria';
    if ((VALID_TABS as readonly string[]).includes(hash)) {
      return hash as TabKey;
    }
    return 'inicio';
  };

  const [activeTab, setActiveTab] = useState<TabKey>(getTabFromUrl);

  const handleSelectTab = (tab: TabKey) => {
    // Normalizar si viniera de algún enlace antiguo
    const normalizedTab: TabKey =
      tab === 'servicios-contables'
        ? 'seguridad-salud'
        : tab === 'servicios-tributarios'
        ? 'asesoria-tributaria'
        : tab;

    if (activeTab === normalizedTab) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({ tab: normalizedTab }, '', '#' + normalizedTab);
    setActiveTab(normalizedTab);

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  };

  useEffect(() => {
    const initialTab = getTabFromUrl();
    const currentHash = window.location.hash.replace(/^#/, '');
    if (!currentHash || !(VALID_TABS as readonly string[]).includes(currentHash)) {
      window.history.replaceState({ tab: 'inicio' }, '', '#inicio');
    } else {
      window.history.replaceState({ tab: initialTab }, '', '#' + initialTab);
    }

    const handleNavigation = () => {
      const targetTab = getTabFromUrl();
      setActiveTab(targetTab);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC] text-[#102547] selection:bg-sky-100 selection:text-[#0284C7]">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Independent Views */}
      <main className="grow pb-0 overflow-x-hidden">
        {activeTab === 'inicio' && <HomeView onSelectTab={handleSelectTab} />}
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center bg-[#F4F8FC]" />}>
          {activeTab === 'nosotros' && <AboutView onSelectTab={handleSelectTab} />}
          {(activeTab === 'seguridad-salud' || activeTab === 'servicios-contables') && <OccupationalHealthView />}
          {(activeTab === 'asesoria-tributaria' || activeTab === 'servicios-tributarios') && <TaxAdvisoryView />}
          {activeTab === 'asesoria-legal' && <CorporateLegalView />}
          {activeTab === 'contacto' && <ContactView />}
        </Suspense>
      </main>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeTab={activeTab} onSelectTab={handleSelectTab} />
    </div>
  );
};
