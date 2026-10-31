"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, RadioTower } from "lucide-react";
import { pipelineStages, flagshipFocus } from "../lib/data";

interface FlagshipSectionProps {
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

export function FlagshipSection({ viewMode, onTabClick }: FlagshipSectionProps) {
  return (
    <motion.div key="view-flagship" initial="hidden" animate="show" exit="exit" variants={fadeUp}>
      <section id="flagship" className="section flagship">
        <div className="shell flagship-inner">
          <Reveal>
            <motion.span className="flagship-badge" variants={fadeUp}>
              <RadioTower size={13} /> FLAGSHIP FREELANCE ENGAGEMENT
            </motion.span>
            <motion.span
              className="section-kicker cyan"
              style={{ display: "block", marginBottom: 10 }}
              variants={fadeUp}
            >
              PROPEDGE — CLOUD INFRASTRUCTURE &amp; DEVSECOPS
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Production platform for a proprietary futures trading business.
            </motion.h2>
            <motion.p className="lead" variants={fadeUp}>
              PropEdge is the cloud platform I designed, automated, and operate for a US-based proprietary futures trading business — a secure, zero-downtime foundation where trading applications execute safely.
            </motion.p>
            <motion.div className="flagship-role" variants={fadeUp}>
              <strong>Role:</strong> Lead Cloud Infrastructure &amp; DevSecOps Freelancer — architecture through operations delivered independently.
            </motion.div>
            <motion.div className="pipeline-strip" variants={stagger}>
              {pipelineStages.map((stage) => (
                <motion.span key={stage} variants={fadeUp}>
                  <CheckCircle2 size={12} /> {stage}
                </motion.span>
              ))}
            </motion.div>
            <motion.p className="flagship-note" variants={fadeUp}>
              Infrastructure scale, client proprietary data, and sensitive parameters are protected under non-disclosure agreements.
            </motion.p>
          </Reveal>

          <Reveal>
            <motion.div className="focus-grid" variants={stagger}>
              {flagshipFocus.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div className="focus-item" key={item.title} variants={fadeUp}>
                    <Icon size={19} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </Reveal>
        </div>

        {viewMode === "tabbed" && (
          <div style={{ marginTop: 36, textAlign: "center" }}>
            <button className="button button-primary" onClick={() => onTabClick("work")}>
              Next: View Reference Case Studies <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </section>
    </motion.div>
  );
}
