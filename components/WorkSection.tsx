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

            {/* XERJ Corpus Hub Contributor Banner */}
            <motion.div
              variants={fadeUp}
              className="mb-8 p-5 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-purple-950/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg shadow-purple-950/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                <a
                  href="https://hub.xerj.org/contributors/sanjiivsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hub.xerj.org/contributors/sanjiivsingh/badge.svg"
                    alt="XERJ Corpus Hub Contributor"
                    style={{ height: 26 }}
                    className="hover:opacity-90 transition"
                  />
                </a>
                <div>
                  <h4 className="text-white font-semibold text-sm flex flex-wrap items-center gap-2">
                    Official Contributor &mdash; XERJ Corpus Hub
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      AI Agent Reference Memory
                    </span>
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">
                    <code>terraform-azure-foundation</code> is officially indexed as a ground-truth worked example that autonomous AI coding agents retrieve when synthesizing Azure modular IaC.
                  </p>
                </div>
              </div>
              <a
                href="https://hub.xerj.org/contributors/sanjiivsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-outline text-xs whitespace-nowrap border-purple-500/40 text-purple-300 hover:bg-purple-900/30 flex items-center gap-1.5 shrink-0"
              >
                View Registry Record <ArrowUpRight size={14} />
              </a>
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
