"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, ShieldCheck, X, Settings2 } from "lucide-react";
import Switch from "@/components/ui/Switch";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "tylerbuilds_cookie_preferences";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Preference states
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      const timer = setTimeout(() => setShowBanner(true), 600);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(savedConsent);
        setAnalytics(parsed.analytics);
        setMarketing(parsed.marketing);
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      setShowModal(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const savePreferences = (analyticsVal: boolean, marketingVal: boolean) => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: analyticsVal,
      marketing: marketingVal,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setAnalytics(analyticsVal);
    setMarketing(marketingVal);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    savePreferences(true, true);
  };

  const handleDeclineOptional = () => {
    savePreferences(false, false);
  };

  const handleSavePreferences = () => {
    savePreferences(analytics, marketing);
  };

  return (
    <>
      {/* Floating Consent Banner */}
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.aside
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            aria-label="Cookie consent banner"
            className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 card rounded border border-white/10 p-5 md:p-6 shadow-2xl backdrop-blur-md text-foreground"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-primary-cta/10 text-primary-cta shrink-0 mt-0.5">
                <Cookie className="size-5" />
              </div>
              <div className="flex-1 min-w-0 space-y-2">
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  Cookie & Data Preferences
                </h3>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                  We use essential cookies for core functionality and optional cookies to analyze traffic and customize your experience. You can manage your choices at any time. Review our{" "}
                  <a
                    href="/privacy"
                    className="underline font-medium hover:text-foreground text-foreground/90 transition-colors"
                  >
                    Privacy Policy
                  </a>.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={handleAcceptAll}
                    className="primary-button text-primary-cta-text px-4 py-2 text-xs md:text-sm font-medium rounded cursor-pointer transition-transform active:scale-95"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDeclineOptional}
                    className="secondary-button text-secondary-cta-text px-4 py-2 text-xs md:text-sm font-medium rounded cursor-pointer transition-transform active:scale-95"
                  >
                    Decline Optional
                  </button>
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm text-foreground/75 hover:text-foreground underline cursor-pointer transition-colors"
                  >
                    <Settings2 className="size-3.5" />
                    Manage Preferences
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Preferences Management Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
            <motion.div
              className="relative card rounded border border-white/10 p-6 max-w-lg w-full shadow-2xl text-foreground space-y-6 max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-5 text-primary-cta" />
                  <h2 className="text-lg font-semibold text-foreground">Manage Cookie Preferences</h2>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="shrink-0 flex items-center justify-center size-8 rounded secondary-button text-secondary-cta-text cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Close preferences"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
                We value your privacy rights under Alberta's PIPA and PIPEDA. Customize your consent choices below for each cookie category. You can update these settings at any time. For more information, please read our{" "}
                <a
                  href="/privacy"
                  className="underline font-medium hover:text-foreground text-foreground transition-colors"
                >
                  Privacy Policy
                </a>.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Category 1: Necessary */}
                <div className="p-4 rounded border border-white/5 bg-white/5 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-foreground">Strictly Necessary Cookies</span>
                    <span className="text-2xs uppercase tracking-wider px-2 py-0.5 rounded bg-primary-cta/20 text-primary-cta font-medium">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 leading-normal">
                    Essential for web application security, user sessions, page navigation, and core system functionality. These cannot be disabled.
                  </p>
                </div>

                {/* Category 2: Analytics */}
                <div className="p-4 rounded border border-white/5 bg-white/5 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-foreground">Analytics & Performance Cookies</span>
                    <Switch
                      checked={analytics}
                      onChange={(val) => setAnalytics(val)}
                    />
                  </div>
                  <p className="text-xs text-foreground/70 leading-normal">
                    Collect aggregated, anonymized metrics to help us evaluate site performance, optimize page load speeds, and improve visitor experience.
                  </p>
                </div>

                {/* Category 3: Marketing & Personalization */}
                <div className="p-4 rounded border border-white/5 bg-white/5 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-foreground">Marketing & Personalization</span>
                    <Switch
                      checked={marketing}
                      onChange={(val) => setMarketing(val)}
                    />
                  </div>
                  <p className="text-xs text-foreground/70 leading-normal">
                    Allows us to tailor communications and remember user settings across visits.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={handleDeclineOptional}
                  className="w-full sm:w-auto secondary-button text-secondary-cta-text px-4 py-2 text-xs md:text-sm font-medium rounded cursor-pointer transition-transform active:scale-95"
                >
                  Decline Optional
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto primary-button text-primary-cta-text px-5 py-2 text-xs md:text-sm font-medium rounded cursor-pointer transition-transform active:scale-95"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
