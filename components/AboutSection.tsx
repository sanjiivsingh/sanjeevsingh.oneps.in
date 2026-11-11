"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { principles } from "../lib/data";

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

export function AboutSection() {
  return (
    <motion.div key="view-about" initial="hidden" animate="show" exit="exit" variants={fadeUp}>
      <section id="about" className="section shell about-section">
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image">
            <Image
              src="/profile.png"
              alt="Sanjeev Singh professional portrait"
              width={400}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
        <Reveal className="about-copy">
          <motion.span className="section-kicker emerald" variants={fadeUp}>
            ABOUT SANJEEV SINGH
          </motion.span>
          <motion.h2 variants={fadeUp}>
            Senior discipline shaped by banking, enterprise IT &amp; cloud platforms.
          </motion.h2>
          <motion.p variants={fadeUp}>
            My background spans banking operations, institutional risk, and enterprise cloud platform engineering. Prior to full-time consulting, I served with <strong>State Bank of India (SBI)</strong> for over 4 years — gaining deep operational rigor in risk management, audit controls, and least-privilege authorization that directly guides how I design zero-trust cloud architectures today.
          </motion.p>
          <motion.p variants={fadeUp}>
            I work independently as a <strong>Senior Cloud &amp; DevSecOps Platform Engineer and Infrastructure Consultant</strong> for diverse global clients. My work includes architecting, automating, and maintaining the production cloud for PropEdge (a US futures proprietary trading platform), alongside designing enterprise Landing Zones across Azure, Zero-Trust AI Landing Zones (Azure OpenAI, APIM AI Gateway, Vector RAG), Kubernetes platform engineering, and passwordless CI/CD pipelines.
          </motion.p>

          <motion.div className="about-stats" variants={fadeUp}>
            <div className="about-stat-card">
              <strong>Enterprise AI &amp; Cloud</strong>
              <span>Azure OpenAI, APIM AI Gateway &amp; Vector RAG</span>
            </div>
            <div className="about-stat-card">
              <strong>Institutional Heritage</strong>
              <span>State Bank of India Risk &amp; Audit Governance</span>
            </div>
            <div className="about-stat-card">
              <strong>Production Delivery</strong>
              <span>Modular IaC, AKS Security &amp; DevSecOps</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hub.xerj.org/contributors/sanjiivsingh/badge.svg"
                alt="XERJ Corpus Hub Contributor"
                style={{ height: 22 }}
              />
              <div>
                <div className="text-sm font-semibold text-white">Official XERJ Corpus Hub Contributor</div>
                <div className="text-xs text-slate-400">
                  <code>terraform-azure-foundation</code> selected as reference memory for autonomous AI coding agents
                </div>
              </div>
            </div>
            <a
              href="https://hub.xerj.org/contributors/sanjiivsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 underline underline-offset-4 whitespace-nowrap"
            >
              View Contributor Record &rarr;
            </a>
          </motion.div>
        </Reveal>
      </section>

      {/* ENGINEERING PRINCIPLES & PROCESS */}
      <section className="section shell">
        <Reveal>
          <motion.div className="section-heading" variants={fadeUp}>
            <span className="section-kicker azure">ENGINEERING PRINCIPLES</span>
            <h2>Production defaults I enforce on every contract.</h2>
            <p>
              These are the operational checklist every module, pipeline, and policy gets tested against before handover.
            </p>
          </motion.div>
          <motion.div className="principles-grid" variants={stagger}>
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div className="principle-item" key={p.title} variants={fadeUp}>
                  <Icon size={20} />
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Reveal>
      </section>
    </motion.div>
  );
}
