"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, HomeIcon } from "lucide-react";
import { Navbar } from "./Navbar";
import { ViewModeSelector } from "./ViewModeSelector";
import { Hero } from "./Hero";
import { TrustStrip } from "./TrustStrip";
import { ServicesSection } from "./ServicesSection";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { FlagshipSection } from "./FlagshipSection";
import { WorkSection } from "./WorkSection";
import { AboutSection } from "./AboutSection";
import { StackSection } from "./StackSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export function InteractivePortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("delivery");
  const [viewMode, setViewMode] = useState<"tabbed" | "full">("tabbed");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMenuOpen(false);
    if (viewMode === "full") {
      const el = document.getElementById(tabId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main>
      <Navbar
        scrolled={scrolled}
        activeTab={activeTab}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onTabClick={handleTabClick}
      />

      <ViewModeSelector viewMode={viewMode} setViewMode={setViewMode} />

      {/* ---------- HERO SECTION ---------- */}
      {(viewMode === "full" || activeTab === "delivery") && (
        <Hero onTabClick={handleTabClick} />
      )}

      {/* ---------- Trust Strip ---------- */}
      <TrustStrip />

      {/* ---------- TABBED BREADCRUMB ---------- */}
      {viewMode === "tabbed" && activeTab !== "delivery" && (
        <div className="shell" style={{ paddingTop: 18 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 18px", borderRadius: 14, background: "var(--bg-card-alt)", border: "1px solid var(--border-subtle)" }}>
            <button
              onClick={() => handleTabClick("delivery")}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 800, color: "var(--azure-dark)", background: "none", border: "none", cursor: "pointer" }}
            >
              <ArrowLeft size={16} /> Back to Home Overview
            </button>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <HomeIcon size={14} /> Screen: <strong style={{ color: "var(--text-main)", textTransform: "capitalize" }}>{activeTab}</strong>
            </span>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {(viewMode === "full" || activeTab === "services") && (
          <ServicesSection key="services-sec" viewMode={viewMode} onTabClick={handleTabClick} />
        )}

        {(viewMode === "full" || activeTab === "expertise") && (
          <CapabilitiesSection key="capabilities-sec" viewMode={viewMode} onTabClick={handleTabClick} />
        )}

        {(viewMode === "full" || activeTab === "flagship") && (
          <FlagshipSection key="flagship-sec" viewMode={viewMode} onTabClick={handleTabClick} />
        )}

        {(viewMode === "full" || activeTab === "work") && (
          <WorkSection key="work-sec" viewMode={viewMode} onTabClick={handleTabClick} />
        )}

        {(viewMode === "full" || activeTab === "about") && (
          <AboutSection key="about-sec" />
        )}
      </AnimatePresence>

      <StackSection />

      <ContactSection />

      <Footer onTabClick={handleTabClick} />
    </main>
  );
}
