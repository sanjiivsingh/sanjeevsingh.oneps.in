# Sanjeev Singh — Multi-Cloud & Hybrid Cloud Portfolio

Professional portfolio and client-facing capability profile for **Sanjeev Singh — Multi-Cloud & Hybrid Cloud Infrastructure Freelance Engineer**.

Positioned as a senior cloud & platform engineering specialist across public clouds (**Azure, AWS, GCP**) and **On-Premises Data Centers**: leading with Multi-Cloud Landing Zones, Terraform/OpenTofu automation, hybrid cross-cloud networking, Kubernetes platform engineering (AKS, EKS, GKE, On-Prem K8s), DevSecOps CI/CD, and zero-trust cloud governance.

---

## 🚀 Key Positioning & Freelance Scope

- **Multi-Cloud Landing Zones**: Azure CAF, AWS Control Tower, GCP Foundations, and On-Premises hybrid data center mesh with automated governance and policy-as-code.
- **Hybrid Networking**: Azure ExpressRoute, AWS Direct Connect, VPN Tunnels, Transit Gateway, Hub-and-Spoke VNets, and cross-cloud Private Link connectivity.
- **Terraform & OpenTofu IaC**: Modular, multi-provider infrastructure definitions with automated plan/apply validation, state locking, and drift detection.
- **Multi-Cloud Kubernetes**: Hardened AKS, EKS, GKE, and On-Premises bare-metal/VMware clusters with Workload Identity, Istio service mesh, autoscaling, and ArgoCD/Flux GitOps.
- **DevSecOps CI/CD**: GitHub Actions, Azure DevOps, and GitLab CI pipelines with OIDC workload federation, Checkov/tfsec IaC scans, secret scanning, and zero-downtime deployment.
- **Flagship Engagement**: PropEdge — Production cloud infrastructure & DevSecOps for a US-based proprietary futures trading business.

---

## 🎨 Visual Design & Theme

- **Palette**: Clean light slate background without background dots (`#f8fafc`), pure white card containers (`#ffffff`), and vibrant multi-color accents:
  - Azure Blue (`#0284c7`)
  - Indigo / Violet (`#6366f1`)
  - Emerald Green (`#059669`)
  - Amber / Gold (`#f59e0b`)
  - Tech Cyan (`#0891b2`)
  - Rose (`#f43f5e`)
- **Typography System**:
  - `Outfit` (Modern geometric display headings & brand title)
  - `Inter` (Industry-standard UI body typography)
  - `Fira Code` (Monospace for code, pipeline stages, status tags, and metrics)
- **Signature Visuals**:
  - Interactive **"Multi-Cloud & Hybrid Delivery Engine"** graphic replacing static hub-and-spoke diagrams.
  - Multi-tone brand emblem badge (`SS`).
  - Live Freelancer Availability Pill ("🟢 Open for Q3/Q4 Contracts").

---

## 🔗 Adding Project Links & Social Profiles

The portfolio includes a **Smart Inactive Link Mechanism**. If a URL is not provided for a project or social profile, the hyperlink degrades gracefully into a styled inactive badge (*e.g. `Source Code (Private / Confidential)`*) to keep the portfolio clean and professional without dead `#` links.

### 1. Social Links Setup (`.env`)

Create or update `.env` in the root directory:

```env
# Contact Email
NEXT_PUBLIC_EMAIL=sanjeev@example.com

# Social Links
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/sanjiivsingh/
NEXT_PUBLIC_GITHUB_URL=https://github.com/sanjiivsingh
NEXT_PUBLIC_X_URL=https://x.com/sanjiivsingh
```

### 2. Adding Project URLs (`lib/data.ts`)

Open [`lib/data.ts`](file:///Users/sanjeevsingh/Desktop/sanjeevsingh.oneps.in-fresh%202/lib/data.ts) and set the `url` field for any project in `workProjects`:

```typescript
{
  id: "project-landing-zone",
  type: "REFERENCE ARCHITECTURE",
  title: "Enterprise Multi-Cloud & Hybrid Landing Zone",
  links: [
    { title: "GitHub Code", url: "https://github.com/sanjiivsingh/your-repo", type: "github" },
    { title: "Live Spec", url: "https://your-demo-url.com", type: "demo" }
  ]
}
```

---

## 🛠️ Local Development & Docker

```bash
# Local Dev
npm install
npm run dev

# Docker Deployment
docker compose up -d --build
```

---

## 📜 License & Copyright

© 2026 Sanjeev Singh. All rights reserved.
