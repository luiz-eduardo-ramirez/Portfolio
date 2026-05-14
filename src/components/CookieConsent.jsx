import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    const dismissed = sessionStorage.getItem('cookie-dismissed');

    if (!consent && !dismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const dismissBanner = () => {
    sessionStorage.setItem('cookie-dismissed', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-8 md:max-w-sm"
        >
          <div className="glass-dark border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex gap-4 items-start">
              <div className="bg-brand-500/20 p-2.5 rounded-xl shrink-0">
                <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-white font-bold text-base">Cookies & Privacidade</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Utilizamos cookies para entender como você interage com o portfólio e melhorar sua experiência.
                </p>
                
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={acceptCookies}
                    className="bg-brand-500 hover:bg-brand-400 text-white text-xs font-bold py-2 px-4 rounded-lg transition-all"
                  >
                    Aceitar
                  </button>
                  <button
                    onClick={dismissBanner}
                    className="bg-white/5 hover:bg-white/10 text-slate-300 text-xs py-2 px-4 rounded-lg transition-all"
                  >
                    Agora não
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
