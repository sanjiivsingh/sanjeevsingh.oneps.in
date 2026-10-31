"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "../lib/data";

interface NavbarProps {
  scrolled: boolean;
  activeTab: string;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onTabClick: (tabId: string) => void;
}

export function Navbar({
  scrolled,
  activeTab,
  menuOpen,
  setMenuOpen,
  onTabClick
}: NavbarProps) {
  return (
    <div className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav" aria-label="Main Navigation">
        <a
          href="#top"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            onTabClick("delivery");
          }}
        >
          <div className="brand-profile-avatar-wrap">
            <Image
              src="/profile.png"
              alt="Sanjeev Singh profile"
              width={44}
              height={44}
              className="brand-profile-avatar"
              priority
            />
          </div>
          <span>
            Sanjeev Singh<span className="brand-dot">.</span>
          </span>
        </a>

        {/* Interactive Navigation Tabs with High Contrast Selected Style */}
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabClick(item.id)}
              className={`nav-tab ${activeTab === item.id ? "active" : ""}`}
              style={{
                background: activeTab === item.id ? item.tone : "transparent",
                color: activeTab === item.id ? "#ffffff" : "#475569",
                border: "none"
              }}
            >
              {item.label}
            </button>
          ))}
          <a href="#contact" className="nav-cta">
            Hire for Contract <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="nav-burger"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={activeTab === item.id ? "active" : ""}
                onClick={() => onTabClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="button button-primary nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Hire for Contract <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
