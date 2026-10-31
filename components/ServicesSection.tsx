"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { freelanceServices } from "../lib/data";

interface ServicesSectionProps {
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

export function ServicesSection({ viewMode, onTabClick }: ServicesSectionProps) {
  return (
    <motion.div key="view-services" initial="hidden" animate="show" exit="exit" variants={fadeUp}>
      <section id="services" className="section shell">
        <Reveal>
          <motion.div className="section-heading" variants={fadeUp}>
            <span className="section-kicker violet">FREELANCE SERVICES</span>
            <h2>Collaborate across multi-cloud &amp; hybrid setups.</h2>
            <p>
              I partner with CTOs and Engineering Leads as an independent freelance specialist — delivering multi-cloud foundations, migrating legacy systems, or hardening hybrid infrastructure security.
            </p>
          </motion.div>
          <motion.div className="services-grid" variants={stagger}>
            {freelanceServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className={`service-card ${service.tone}`}
                  key={service.id}
                  variants={fadeUp}
                >
                  <div className="service-header">
                    <div className="service-icon">
                      <Icon size={24} />
                    </div>
                    <span className="service-tag">{service.engagementType}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <div className="service-tagline">{service.tagline}</div>
                  <p>{service.description}</p>
                  <div className="service-deliverables">
                    <div className="service-deliverables-title">Key Deliverables</div>
                    <div className="service-deliverables-list">
                      {service.deliverables.map((item) => (
                        <span key={item}>
                          <CheckCircle2 size={12} /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {viewMode === "tabbed" && (
            <div style={{ marginTop: 36, textAlign: "center" }}>
              <button className="button button-primary" onClick={() => onTabClick("expertise")}>
                Next: Explore Technical Capabilities <ArrowUpRight size={16} />
              </button>
            </div>
          )}
        </Reveal>
      </section>
    </motion.div>
  );
}
