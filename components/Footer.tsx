"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface FooterProps {
  onTabClick: (tabId: string) => void;
}

export function Footer({ onTabClick }: FooterProps) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="shell footer-inner">
          <div>
            <strong>Sanjeev Singh</strong>
            <span>Multi-Cloud &amp; Hybrid Infrastructure Freelance Engineer</span>
          </div>
          <div className="footer-links">
            <button onClick={() => onTabClick("delivery")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>What I Deliver</button>
            <button onClick={() => onTabClick("services")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>Services</button>
            <button onClick={() => onTabClick("expertise")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>Capabilities</button>
            <button onClick={() => onTabClick("work")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>Case Studies</button>
            <button onClick={() => onTabClick("about")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>About</button>
            <a href="#contact">Contact</a>
          </div>
          <span>© {new Date().getFullYear()} Sanjeev Singh. All rights reserved.</span>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="scroll-top"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
