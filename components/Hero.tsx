"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Play, Film, Layers, Bot } from "lucide-react";
import { personalInfo } from "../lib/data";
import { WhatIDeliverGraphic } from "./WhatIDeliverGraphic";
import { HighTechVideoPlayer } from "./HighTechVideoPlayer";

interface HeroProps {
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

export function Hero({ onTabClick }: HeroProps) {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <motion.section
      id="top"
      className="hero shell"
      key="hero-home"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={fadeUp}
    >
      <motion.div className="hero-copy" variants={stagger}>
        <motion.div className="eyebrow flex flex-wrap items-center gap-2" variants={fadeUp}>
          <span className="status-dot" /> {personalInfo.availabilityStatus}
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a
            href="https://hub.xerj.org/contributors/sanjiivsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:opacity-90 transition"
            title="Official Contributor on XERJ Corpus Hub"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hub.xerj.org/contributors/sanjiivsingh/badge.svg"
              alt="XERJ Corpus Hub Contributor"
              style={{ height: 18 }}
            />
          </a>
        </motion.div>
        <motion.h1 variants={fadeUp}>
          Enterprise Cloud, AI &amp; DevSecOps <span className="accent-azure">built to scale</span>,{" "}
          <span className="accent-emerald">governed by default.</span>
        </motion.h1>
        <motion.p className="hero-lead" variants={fadeUp}>
          I&apos;m <strong>{personalInfo.name}</strong> — Senior Cloud &amp; DevSecOps Platform Engineer and Infrastructure Consultant. I architect Zero-Trust Enterprise AI Landing Zones (Azure OpenAI, APIM AI Gateway, Vector RAG), CAF Hub-and-Spoke networks, modular Terraform IaC, production Kubernetes (AKS), and automated shift-left DevSecOps delivery pipelines.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button button-primary" href="#contact">
            Discuss a Contract Project <ArrowUpRight size={17} />
          </a>
          <button
            type="button"
            className="button button-outline cursor-pointer flex items-center gap-1.5"
            onClick={() => setShowVideo(true)}
          >
            <Play size={15} className="text-sky-400" /> Watch Architecture Reel
          </button>
          <button
            type="button"
            className="button button-outline cursor-pointer"
            onClick={() => onTabClick("services")}
          >
            View Consulting Services
          </button>
        </motion.div>
        <motion.div className="hero-proof" variants={fadeUp}>
          <span><CheckCircle2 size={16} /> Enterprise AI Landing Zones</span>
          <span><CheckCircle2 size={16} /> Azure CAF Hub &amp; Spoke</span>
          <span><CheckCircle2 size={16} /> Production Terraform IaC</span>
          <span><CheckCircle2 size={16} /> Shift-Left DevSecOps</span>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} className="w-full max-w-[580px]">
        {/* Toggle between Architecture Reel and Architecture Blueprint */}
        <div className="flex items-center justify-end gap-2 mb-2">
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
              showVideo
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "bg-slate-800/80 text-slate-400 hover:text-white"
            }`}
          >
            <Film size={13} /> Architecture Reel
          </button>
          <button
            type="button"
            onClick={() => setShowVideo(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
              !showVideo
                ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                : "bg-slate-800/80 text-slate-400 hover:text-white"
            }`}
          >
            <Layers size={13} /> Architecture Blueprint
          </button>
        </div>

        {showVideo ? (
          <HighTechVideoPlayer />
        ) : (
          <WhatIDeliverGraphic onSelectTab={onTabClick} />
        )}
      </motion.div>
    </motion.section>
  );
}
