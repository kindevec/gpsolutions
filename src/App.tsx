import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomeView } from './views/HomeView';
import { AccountingServicesView } from './views/AccountingServicesView';
import { TaxServicesView } from './views/TaxServicesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import type { TabKey } from './types';

const VALID_TABS: readonly TabKey[] = [
  'inicio',
  'servicios-contables',
  'servicios-tributarios',
  'nosotros',
  'contacto',
];

export const App: React.FC = () => {
  const getTabFromUrl = (): TabKey => {
    const hash = window.location.hash.replace(/^#/, '').toLowerCase();
    if ((VALID_TABS as readonly string[]).includes(hash)) {
      return hash as TabKey;
    }
    return 'inicio';
  };

  const [activeTab, setActiveTab] = useState<TabKey>(getTabFromUrl);

  const handleSelectTab = (tab: TabKey) => {
    if (activeTab === tab) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({ tab }, '', '#' + tab);
    setActiveTab(tab);

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
        {activeTab === 'servicios-contables' && <AccountingServicesView />}
        {activeTab === 'servicios-tributarios' && <TaxServicesView />}
        {activeTab === 'nosotros' && <AboutView onSelectTab={handleSelectTab} />}
        {activeTab === 'contacto' && <ContactView />}
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
