import { Cloud, Layers, HardDrive, Boxes, ShieldCheck } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="trust-strip" style={{ marginTop: 10 }}>
      <div className="shell trust-inner">
        <span>FREELANCE CAPABILITIES</span>
        <div style={{ color: "#0284c7" }}><Cloud size={16} /> Multi-Cloud Landing Zones</div>
        <div style={{ color: "#6366f1" }}><Layers size={16} /> Terraform &amp; OpenTofu</div>
        <div style={{ color: "#059669" }}><HardDrive size={16} /> Hybrid On-Prem Mesh</div>
        <div style={{ color: "#d97706" }}><Boxes size={16} /> AKS &amp; Managed K8s</div>
        <div style={{ color: "#e11d48" }}><ShieldCheck size={16} /> Zero-Trust Security</div>
      </div>
    </section>
  );
}
