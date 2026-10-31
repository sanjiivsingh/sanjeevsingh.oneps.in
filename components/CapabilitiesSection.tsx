"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "../lib/data";

interface CapabilitiesSectionProps {
  viewMode: "tabbed" | "full";
  onTabClick: (tabId: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: "easeInOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}

export function CapabilitiesSection({ viewMode, onTabClick }: CapabilitiesSectionProps) {
  return (
    <motion.div key="view-expertise" initial="hidden" animate="show" exit="exit" variants={fadeUp}>
      <section id="expertise" className="section shell">
        <Reveal>
          <motion.div className="section-heading" variants={fadeUp}>
            <span className="section-kicker emerald">TECHNICAL SPECIALIZATIONS</span>
            <h2>Multi-cloud &amp; hybrid capabilities.</h2>
            <p>
              End-to-end cloud platform engineering across Azure, public clouds, and private data centers — architecture, security guardrails, IaC automation, and team handover.
            </p>
          </motion.div>
          <motion.div className="capability-grid" variants={stagger}>
            {capabilities.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article
                  className={`capability-card ${group.tone}`}
                  key={group.title}
                  variants={fadeUp}
                >
                  <div className="capability-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="chip-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {viewMode === "tabbed" && (
            <div style={{ marginTop: 36, textAlign: "center" }}>
              <button className="button button-primary" onClick={() => onTabClick("flagship")}>
                Next: View Flagship Platform <ArrowUpRight size={16} />
              </button>
            </div>
          )}
        </Reveal>
      </section>
    </motion.div>
  );
}
