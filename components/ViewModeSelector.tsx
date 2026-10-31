"use client";

import { Sparkles, Layers3, LayoutGrid } from "lucide-react";

interface ViewModeSelectorProps {
  viewMode: "tabbed" | "full";
  setViewMode: (mode: "tabbed" | "full") => void;
}

export function ViewModeSelector({ viewMode, setViewMode }: ViewModeSelectorProps) {
  return (
    <div className="shell" style={{ paddingTop: 14 }}>
      <div className="mode-bar">
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "var(--text-soft)" }}>
          <Sparkles size={16} color="var(--azure)" />
          <span>Interactive Portfolio View:</span>
        </div>
        <div className="view-mode-toggle">
          <button
            className={`view-mode-btn ${viewMode === "tabbed" ? "active" : ""}`}
            onClick={() => setViewMode("tabbed")}
          >
            <Layers3 size={13} style={{ display: "inline", marginRight: 4 }} /> Tabbed View Mode
          </button>
          <button
            className={`view-mode-btn ${viewMode === "full" ? "active" : ""}`}
            onClick={() => setViewMode("full")}
          >
            <LayoutGrid size={13} style={{ display: "inline", marginRight: 4 }} /> Full Page Scroll Mode
          </button>
        </div>
      </div>
    </div>
  );
}
