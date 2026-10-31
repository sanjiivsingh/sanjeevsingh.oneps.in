"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CloudLogoIcon } from "./CloudLogoIcon";
import { deliveryHighlights } from "../lib/data";

interface WhatIDeliverGraphicProps {
  onSelectTab: (tabId: string) => void;
}

export function WhatIDeliverGraphic({ onSelectTab }: WhatIDeliverGraphicProps) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % deliveryHighlights.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="delivery-container">
      <div className="delivery-header">
        <span className="delivery-header-title">MULTI-CLOUD &amp; HYBRID DELIVERY ENGINE</span>
        <span className="delivery-status-badge">
          <span className="status-dot" /> LIVE ENGINE
        </span>
      </div>

      {/* Cloud & On-Prem Nodes with Custom Logos */}
      <div className="delivery-cloud-nodes">
        <div className="cloud-node-pill azure">
          <CloudLogoIcon type="azure" />
          <span>Azure CAF</span>
        </div>
        <div className="cloud-node-pill aws">
          <CloudLogoIcon type="aws" />
          <span>AWS Hybrid</span>
        </div>
        <div className="cloud-node-pill gcp">
          <CloudLogoIcon type="gcp" />
          <span>GCP Infra</span>
        </div>
        <div className="cloud-node-pill onprem">
          <CloudLogoIcon type="onprem" />
          <span>On-Prem Mesh</span>
        </div>
      </div>

      {/* Interactive Delivery Cards Stack */}
      <div className="delivery-cards-stack">
        {deliveryHighlights.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeTab === idx;
          return (
            <motion.div
              key={item.title}
              className="delivery-card-item"
              onClick={() => {
                setActiveTab(idx);
                onSelectTab(item.id);
              }}
              style={{
                borderColor: isActive ? item.color : "var(--border-subtle)",
                background: isActive ? "var(--bg-card-alt)" : "#ffffff",
                boxShadow: isActive ? `0 6px 20px ${item.color}25` : "0 2px 8px rgba(15,23,42,0.03)",
                cursor: "pointer"
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="delivery-card-icon"
                style={{
                  background: `${item.color}15`,
                  color: item.color
                }}
              >
                <Icon size={22} />
              </div>
              <div className="delivery-card-info" style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4>{item.title}</h4>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: item.color,
                      padding: "2px 8px",
                      borderRadius: 999,
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
