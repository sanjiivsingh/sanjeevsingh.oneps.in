"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, Copy, ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { socials } from "../lib/data";
import { SocialLink } from "./SocialLink";

export function ContactSection() {
  const emailHref = socials.email ? `mailto:${socials.email}` : "#contact";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    if (!socials.email) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = emailHref;
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <motion.div
        className="shell contact-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="section-kicker">INITIATE A CONTRACT ENGAGEMENT</span>
          <h2>Need a senior Multi-Cloud &amp; Hybrid Infrastructure expert?</h2>
          <p>
            Whether you need to launch a new Landing Zone across Azure/multi-cloud setups, automate IaC pipelines, harden a Kubernetes platform, or audit your hybrid infrastructure — let&apos;s map out your requirements.
          </p>
        </div>
        <div className="contact-actions">
          <div className="email-button">
            <AnimatePresence>
              {copied && (
                <motion.span
                  className="copy-toast"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                >
                  Email copied to clipboard!
                </motion.span>
              )}
            </AnimatePresence>
            <a className="button button-primary" href={emailHref} onClick={handleCopyEmail}>
              {copied ? <Check size={18} /> : <Mail size={18} />} Email Sanjeev
              {socials.email ? <Copy size={13} /> : <ArrowUpRight size={17} />}
            </a>
          </div>
          <div className="social-row">
            <SocialLink href={socials.linkedin} label="LinkedIn"><Linkedin /></SocialLink>
            <SocialLink href={socials.github} label="GitHub"><Github /></SocialLink>
            <SocialLink href={socials.x} label="X (Twitter)"><Twitter /></SocialLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
