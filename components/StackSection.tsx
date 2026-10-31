"use client";

import React from "react";
import { motion } from "framer-motion";
import { stack } from "../lib/data";

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

export function StackSection() {
  return (
    <section className="section dark-section">
      <div className="shell">
        <Reveal>
          <motion.div className="section-heading light" variants={fadeUp}>
            <span className="section-kicker">TOOLING &amp; MULTI-CLOUD ECOSYSTEM</span>
            <h2>The tech stack powering every hybrid platform I build.</h2>
            <p>Azure, Public Cloud Platforms, and On-Premises technologies unified through code, containerization, and zero-trust security automation.</p>
          </motion.div>
          <motion.div className="stack-grid" variants={stagger}>
            {stack.map(([title, text]) => (
              <motion.div className="stack-group" key={title} variants={fadeUp}>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
