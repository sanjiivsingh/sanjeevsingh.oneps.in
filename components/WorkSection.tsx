"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "../lib/data";
import { SmartLink } from "./SmartLink";

interface WorkSectionProps {
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

export function WorkSection({ viewMode, onTabClick }: WorkSectionProps) {
  return (
    <motion.div key="view-work" initial="hidden" animate="show" exit="exit" variants={fadeUp}>
      <section id="work" className="section">
        <div className="shell">
          <Reveal>
            <motion.div className="section-heading" variants={fadeUp}>
              <span className="section-kicker amber">REFERENCE ARCHITECTURES &amp; CASE STUDIES</span>
              <h2>Reusable multi-cloud patterns for enterprise challenges.</h2>
              <p>
                Standardized reference architectures, modular Terraform definitions, and hybrid security guardrails delivered for real enterprise client challenges.
              </p>
            </motion.div>
            <motion.div className="work-grid" variants={stagger}>
              {workProjects.map((p) => (
                <motion.article className="work-card" key={p.id} variants={fadeUp}>
                  <div className="work-card-head">
                    <h3>{p.title}</h3>
                  </div>
                  <span className="work-type">{p.type}</span>
                  <p className="desc" style={{ marginTop: 10 }}>{p.desc}</p>
                  <div className="work-components">
                    {p.components.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                  <div className="work-objective">
                    <strong>Objective — </strong>{p.objective}
                  </div>
                  <div className="work-card-actions">
                    {p.links && p.links.length > 0 ? (
                      p.links.map((lnk) => (
                        <SmartLink
                          key={lnk.title}
                          href={lnk.url}
                          label={lnk.title}
                          type={lnk.type}
                          fallbackText="Private client repo"
                        />
                      ))
                    ) : (
                      <SmartLink label="Source Code" fallbackText="Private / Confidential" />
                    )}
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {viewMode === "tabbed" && (
              <div style={{ marginTop: 36, textAlign: "center" }}>
                <button className="button button-primary" onClick={() => onTabClick("about")}>
                  Next: About Sanjeev Singh <ArrowUpRight size={16} />
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
}
