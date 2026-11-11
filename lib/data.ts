import {
  Network, Server, Layers, GitBranch, Boxes, ShieldCheck,
  Recycle, KeyRound, Puzzle, Eye, Gauge, Terminal, Cpu, FileCode2,
  Cloud, HardDrive, Database, Globe, Lock, CpuIcon, Flame, Activity, Zap,
  Bot, Sparkles, Workflow, DollarSign, LifeBuoy
} from "lucide-react";

export interface ProjectLinkItem {
  title: string;
  url?: string;
  type: "github" | "live" | "demo" | "docs";
}

export interface Project {
  id: string;
  type: string;
  title: string;
  desc: string;
  components: string[];
  objective: string;
  links?: ProjectLinkItem[];
}

export interface FreelanceService {
  id: string;
  title: string;
  tagline: string;
  icon: any;
  tone: "azure" | "emerald" | "amber" | "violet" | "rose" | "cyan";
  description: string;
  deliverables: string[];
  engagementType: string;
}

export const personalInfo = {
  name: "Sanjeev Singh",
  title: "Senior Azure Cloud Architect & DevSecOps Platform Engineer",
  shortRole: "Senior Azure Cloud Architect & DevSecOps Engineer",
  availability: "Available for Consulting & Contract Engagements",
  availabilityStatus: "Open for Consulting & Contracts",
  experienceYears: "10+ Years (5+ Azure Cloud & DevSecOps)",
  bio: "Senior Azure Cloud Architect & DevSecOps Platform Engineer with 10+ years IT & institutional risk heritage (State Bank of India) and 5+ years dedicated to enterprise Microsoft Azure platforms. Official open-source contributor on the XERJ Corpus Hub (AI coding agent reference memory). I engineer Zero-Trust Enterprise AI Landing Zones (Azure OpenAI, APIM AI Gateway, Vector RAG), CAF Hub-and-Spoke networks with Azure Firewall, modular Terraform IaC, production Kubernetes (AKS), and shift-left DevSecOps delivery pipelines with passwordless GitHub OIDC.",
  location: "Gurugram, India / Remote Global",
};

export const socials = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/sanjiivsingh/",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/sanjiivsingh",
  x: process.env.NEXT_PUBLIC_X_URL || "https://x.com/sanjiivsingh",
  email: process.env.NEXT_PUBLIC_EMAIL || "sanjeevsinghred@gmail.com",
};

export const navItems = [
  { id: "delivery", label: "What I Deliver", tone: "#0284c7" },
  { id: "services", label: "Services", tone: "#6366f1" },
  { id: "expertise", label: "Capabilities", tone: "#059669" },
  { id: "flagship", label: "Flagship", tone: "#f59e0b" },
  { id: "work", label: "Engineering Repos", tone: "#e11d48" },
  { id: "about", label: "About", tone: "#0284c7" },
];

export const freelanceServices: FreelanceService[] = [
  {
    id: "ai-landing-zones",
    title: "Enterprise AI & GenAI Landing Zones",
    tagline: "Zero-Trust Azure OpenAI & LLM Architecture",
    icon: Cpu,
    tone: "violet",
    description: "Production Zero-Trust Landing Zones for Azure OpenAI (GPT-4o), API Management as an AI Gateway (token rate-limiting, semantic caching), Azure AI Search vector RAG, and private networking with zero public exposure.",
    deliverables: ["Private Azure OpenAI (GPT-4o/Embeddings)", "APIM AI Gateway & Token Policies", "AI Search Vector Store for RAG", "Customer-Managed Key (CMK) Encryption", "CIS Azure Benchmark v2.0 Mapping"],
    engagementType: "Fixed-Scope / Sprint"
  },
  {
    id: "landing-zones",
    title: "Azure CAF Hub-and-Spoke Landing Zones",
    tagline: "Enterprise Cloud Adoption Framework foundations",
    icon: Cloud,
    tone: "azure",
    description: "Enterprise Hub-and-Spoke network topology with central Azure Firewall Standard, Bastion, GatewaySubnet, and automated bidirectional VNet peering enforcing default route 0.0.0.0/0 and spoke-to-spoke inspection.",
    deliverables: ["Modular Terraform CAF Modules", "Azure Firewall Standard & Bastion", "UDR Forced Tunneling & Spoke Inspection", "Automated Policy-as-Code Guardrails"],
    engagementType: "Fixed-Scope / Milestone"
  },
  {
    id: "devsecops-automation",
    title: "Shift-Left DevSecOps & Security Policy Gates",
    tagline: "Passwordless CI/CD & Automated Security Gates",
    icon: GitBranch,
    tone: "rose",
    description: "End-to-end continuous delivery pipeline integrating pre-flight linters, SAST scanning (Checkov/tfsec), secret detection (Gitleaks), container vulnerability scanning (Trivy), staged approval gates, and passwordless OIDC auth.",
    deliverables: ["GitHub Actions & Azure DevOps CI/CD", "OIDC Federated Passwordless Auth", "Policy-as-Code (Checkov & tfsec)", "Gitleaks Secret Detection & Trivy Scan", "Staged Environment Deployment Gates"],
    engagementType: "Contract / Retainer"
  },
  {
    id: "kubernetes-platform",
    title: "Production Kubernetes (AKS) & Cloud Native",
    tagline: "Hardened AKS Clusters with Zero-Trust Identity",
    icon: Boxes,
    tone: "emerald",
    description: "Production Kubernetes across Azure (AKS). Workload Identity, Calico network security policies, Key Vault CSI secret auto-rotation, autoscaling, ingress controllers, and GitOps pipelines.",
    deliverables: ["IaC Cluster Provisioning", "Workload Identity Wiring", "Calico Network Security Policies", "Key Vault CSI Secret Auto-Rotation", "GitOps (ArgoCD/Flux) Integration"],
    engagementType: "Project / Advisory"
  },
  {
    id: "governance-finops",
    title: "Cloud Governance, FinOps & Policy as Code",
    tagline: "Prevent cloud billing surprises & enforce security guardrails",
    icon: DollarSign,
    tone: "amber",
    description: "Enterprise subscription governance, Management Group hierarchy, custom Azure Policy initiatives (mandatory CostCenter/Owner tagging, location restrictions, TLS 1.2+), and Infracost CI pull request gates.",
    deliverables: ["Management Group Hierarchy & Vending", "Custom Azure Policy Initiatives", "Subscription Consumption Budgets", "Infracost PR Cost Gates", "FinOps Spending Alert Action Groups"],
    engagementType: "1-2 Week Sprint"
  },
  {
    id: "dr-reliability",
    title: "Disaster Recovery, Observability & Runbooks",
    tagline: "Operational readiness, tested runbooks & central telemetry",
    icon: LifeBuoy,
    tone: "cyan",
    description: "Sanitized disaster recovery runbooks as code (AKS Velero restore, Key Vault recovery, Storage GRS failover), central Log Analytics workspaces with daily quota caps, and curated KQL security/operations query packs.",
    deliverables: ["Central Log Analytics Baseline", "Reusable Diagnostic Settings Module", "Curated KQL Security Query Pack", "Automated Daily Quota Spikes Alert", "Sanitized DR Runbooks & Drill Logs"],
    engagementType: "Fixed-Scope / Sprint"
  }
];

export const capabilities = [
  {
    title: "Enterprise AI & GenAI Infrastructure",
    icon: Cpu,
    tone: "violet",
    description: "Enterprise-grade foundations for Azure OpenAI and LLM inference, embedding, and vector grounding.",
    items: ["Azure OpenAI (GPT-4o & Embeddings)", "APIM AI Gateway & Token Governance", "Semantic Caching & Rate Limiting", "Azure AI Search Vector Store (RAG)", "Private Endpoints & CMK Key Vault", "CIS Azure Benchmark v2.0 Controls"]
  },
  {
    title: "Azure CAF Hub-and-Spoke Landing Zones",
    icon: Cloud,
    tone: "azure",
    description: "Framework-aligned foundations for Azure (CAF) with governance, hub firewalling, and account hierarchy.",
    items: ["Azure Landing Zones (CAF)", "Hub-and-Spoke Topologies", "Azure Firewall Standard & Bastion", "UDR Forced Tunneling Mesh", "Multi-Spoke East-West Inspection"]
  },
  {
    title: "Terraform & IaC Automation",
    icon: Layers,
    tone: "cyan",
    description: "Version-controlled, peer-reviewed infrastructure code reproducible from source definitions.",
    items: ["Modular Terraform 1.9+ & OpenTofu", "Remote State & Blob Lease Locking", "Passwordless GitHub OIDC Federation", "Zero-Drift Governance", "Checkov & TFLint CI Validation"]
  },
  {
    title: "DevSecOps & Shift-Left Security",
    icon: GitBranch,
    tone: "rose",
    description: "Automated security validation and infrastructure provisioning built into deployment pipelines.",
    items: ["GitHub Actions & Azure Pipelines", "OIDC Workload Federation", "Branch Protection Gates", "Gitleaks Secret Detection", "Checkov SAST & Trivy Scanners"]
  },
  {
    title: "Kubernetes & Container Platforms (AKS)",
    icon: Boxes,
    tone: "emerald",
    description: "Production Kubernetes engineering across AKS with enterprise identity and ingress security.",
    items: ["AKS Production Clusters", "Azure Workload Identity Federation", "Calico Network Security Policies", "Key Vault CSI Secret Driver", "Autoscaling & Container Ingress"]
  },
  {
    title: "Zero-Trust Security & Banking Governance",
    icon: ShieldCheck,
    tone: "amber",
    description: "Banking-grade risk controls and zero-trust perimeter defense applied directly to cloud operations.",
    items: ["State Bank of India (SBI) Risk Heritage", "Defender for Cloud & Sentinel", "Key Vault CMK Encryption", "Role-Based Access Control (RBAC)", "Azure Policy as Code Initiatives"]
  }
];

export const deliveryHighlights = [
  {
    id: "ai-landing-zones",
    title: "Enterprise AI Landing Zones",
    desc: "Azure OpenAI, APIM AI Gateway, Semantic Caching & Vector RAG",
    badge: "Azure AI · GenAI",
    icon: Cpu,
    color: "#8b5cf6"
  },
  {
    id: "landing-zones",
    title: "Azure CAF Hub-and-Spoke",
    desc: "Central Azure Firewall Standard, Bastion & UDR Inspection",
    badge: "Azure CAF",
    icon: Cloud,
    color: "#0284c7"
  },
  {
    id: "iac-pipelines",
    title: "100% Code-Driven IaC",
    desc: "Modular Terraform 1.9+ automation with 0 manual portal steps",
    badge: "Terraform 1.9+",
    icon: Layers,
    color: "#6366f1"
  },
  {
    id: "k8s-platform",
    title: "Production Kubernetes (AKS)",
    desc: "Hardened AKS with Workload Identity, Calico policies & secret rotation",
    badge: "AKS Clusters",
    icon: Boxes,
    color: "#059669"
  },
  {
    id: "devsecops-gates",
    title: "Shift-Left DevSecOps",
    desc: "Gitleaks, Checkov, Trivy, staged approval gates & OIDC auth",
    badge: "CI/CD · SAST",
    icon: ShieldCheck,
    color: "#e11d48"
  }
];

export const pipelineStages = [
  "PR Validation", "Secret Scan (Gitleaks)", "SAST (Checkov & tfsec)", "Terraform Plan", "IaC Security Gate", "Container Scan (Trivy)", "Manual Approval", "Automated Deploy", "Telemetry & Alerting"
];

export const flagshipFocus = [
  { icon: ShieldCheck, title: "Zero-Trust Isolation", text: "Micro-segmented virtual networks, internal private endpoints, and Next-Hop Azure Firewall routing with 0 public exposure." },
  { icon: Terminal, title: "Repeatable IaC Automation", text: "Zero manual portal changes. Every network route, subnet, cluster, and security policy is managed via modular Terraform 1.9+." },
  { icon: GitBranch, title: "Automated DevSecOps", text: "Pre-commit hooks, Gitleaks secret scans, Checkov static analysis, and automated PR comment plan reviews." },
  { icon: Flame, title: "Reliability & DR Drills", text: "Sanitized disaster recovery runbooks with automated state restoration via Velero and Geo-Redundant storage failover." }
];

export const workProjects: Project[] = [
  {
    id: "project-azure-foundation-xerj",
    type: "AI AGENT CORPUS · XERJ HUB",
    title: "Terraform Azure Foundation (Featured on XERJ Hub)",
    desc: "Modular Infrastructure as Code framework officially selected and indexed on the XERJ Corpus Hub as an open reference memory for autonomous AI coding agents synthesizing enterprise Azure infrastructure.",
    components: ["Indexed on XERJ", "AI Agent Worked Example", "Virtual Network & Subnets", "Key Vault", "Storage Account", "Checkov & TFLint CI"],
    objective: "Provides an authoritative ground-truth reference implementation cited by autonomous AI agents before writing cloud infrastructure code.",
    links: [
      { title: "XERJ Contributor Profile", url: "https://hub.xerj.org/contributors/sanjiivsingh", type: "live" },
      { title: "GitHub Repo", url: "https://github.com/sanjiivsingh/terraform-azure-foundation", type: "github" },
      { title: "XERJ Corpus Registry", url: "https://hub.xerj.org/corpus/sanjiivsingh--terraform-azure-foundation", type: "docs" }
    ]
  },
  {
    id: "project-ai-landing-zone",
    type: "PRODUCTION AI INFRASTRUCTURE",
    title: "Enterprise Azure AI & GenAI Landing Zone",
    desc: "Production-ready Zero-Trust architecture for Azure OpenAI (GPT-4o & text-embedding-3), APIM AI Gateway with token rate-limiting and semantic caching, and Azure AI Search vector RAG.",
    components: ["Azure OpenAI GPT-4o", "APIM AI Gateway", "Azure AI Search Vector RAG", "Data Lake Gen2", "Private Endpoints", "Key Vault CMK", "Checkov & TFLint CI/CD"],
    objective: "Provide enterprise teams with a governed, token-rate-limited, zero-public-exposure foundation for deploying Generative AI and RAG workloads safely.",
    links: [
      { title: "GitHub Repo", url: process.env.NEXT_PUBLIC_PROJECT_1_GITHUB || "https://github.com/sanjiivsingh/azure-enterprise-ai-landing-zone-terraform", type: "github" },
      { title: "Compliance Map", url: "https://github.com/sanjiivsingh/azure-enterprise-ai-landing-zone-terraform/blob/main/COMPLIANCE.md", type: "docs" },
      { title: "Verification Evidence", url: "https://github.com/sanjiivsingh/azure-enterprise-ai-landing-zone-terraform/blob/main/docs/EVIDENCE.md", type: "docs" }
    ]
  },
  {
    id: "project-landing-zone",
    type: "CAF NETWORK ARCHITECTURE",
    title: "Azure Enterprise Hub-and-Spoke Landing Zone",
    desc: "Microsoft Cloud Adoption Framework (CAF) aligned Hub-and-Spoke network topology with central Azure Firewall Standard, Bastion, GatewaySubnet, and automated multi-spoke east-west routing.",
    components: ["Hub-and-Spoke VNets", "Azure Firewall Standard", "Azure Bastion", "UDR Forced Tunneling", "Multi-Spoke Routing", "TFLint & Checkov"],
    objective: "A standardized enterprise network landing zone enforcing perimeter security, forced egress inspection, and proven spoke-to-spoke route inspection.",
    links: [
      { title: "GitHub Repo", url: process.env.NEXT_PUBLIC_PROJECT_2_GITHUB || "https://github.com/sanjiivsingh/azure-enterprise-landing-zone-terraform", type: "github" },
      { title: "Architecture ADRs", url: "https://github.com/sanjiivsingh/azure-enterprise-landing-zone-terraform/blob/main/docs/ARCHITECTURE.md", type: "docs" },
      { title: "Verification Evidence", url: "https://github.com/sanjiivsingh/azure-enterprise-landing-zone-terraform/blob/main/docs/EVIDENCE.md", type: "docs" }
    ]
  },
  {
    id: "project-devsecops",
    type: "CI/CD · SECURITY AUTOMATION",
    title: "Azure AKS DevSecOps Pipeline & Cluster Hardening",
    desc: "An end-to-end continuous delivery pipeline integrating pre-flight linters, SAST scanning (Checkov/tfsec), secret detection (Gitleaks), container vulnerability scanning (Trivy), staged approval gates, and passwordless OIDC auth.",
    components: ["Hardened AKS", "Calico NetworkPolicy", "Key Vault CSI Secret Driver", "Gitleaks", "Checkov SAST", "Trivy Scanner", "OIDC Federation"],
    objective: "Shift security and infrastructure validation directly into the pull request lifecycle while maintaining passwordless, auditable deployments.",
    links: [
      { title: "GitHub Repo", url: process.env.NEXT_PUBLIC_PROJECT_4_GITHUB || "https://github.com/sanjiivsingh/azure-aks-devsecops-pipeline", type: "github" },
      { title: "Architecture ADRs", url: "https://github.com/sanjiivsingh/azure-aks-devsecops-pipeline/blob/main/docs/ARCHITECTURE.md", type: "docs" },
      { title: "Verification Evidence", url: "https://github.com/sanjiivsingh/azure-aks-devsecops-pipeline/blob/main/docs/EVIDENCE.md", type: "docs" }
    ]
  },
  {
    id: "project-generic-modules",
    type: "ENTERPRISE IAC LIBRARY",
    title: "Azure Generic Terraform Modules Library",
    desc: "Modular, reusable, and enterprise-hardened Terraform modules for Azure Networking, Compute, Storage, Key Vault, AKS, and security services across 11 validated child modules.",
    components: ["11+ Generic Modules", "Micro-Segmentation", "Private Endpoints", "Automated Tagging", "RBAC Integration", "GitHub Actions CI"],
    objective: "Eliminate repetitive boilerplate and state errors by providing tested, versioned, and compliance-validated Terraform building blocks.",
    links: [
      { title: "GitHub Repo", url: process.env.NEXT_PUBLIC_PROJECT_3_GITHUB || "https://github.com/sanjiivsingh/terraform-azure-resource-modules", type: "github" },
      { title: "Child Module CI", url: "https://github.com/sanjiivsingh/terraform-azure-resource-modules/actions", type: "docs" }
    ]
  },
  {
    id: "project-bootstrap-oidc",
    type: "PLATFORM IDENTITY & STATE",
    title: "Azure Terraform State Bootstrap & GitHub OIDC",
    desc: "Automated Day-0 foundation for Azure Terraform state and CI/CD security: provisions secure Azure Storage with lease locking and configures Azure AD Application with GitHub federated OIDC credentials.",
    components: ["Azure Storage Backend", "Blob Lease Locking", "Entra ID Federated Credentials", "GitHub OIDC", "Least-Privilege RBAC"],
    objective: "Establish a passwordless, auditable Day-0 cloud foundation with zero long-lived credentials stored in GitHub Secrets.",
    links: [
      { title: "GitHub Repo", url: "https://github.com/sanjiivsingh/azure-terraform-bootstrap-oidc", type: "github" },
      { title: "Architecture ADRs", url: "https://github.com/sanjiivsingh/azure-terraform-bootstrap-oidc/blob/main/docs/ARCHITECTURE.md", type: "docs" }
    ]
  },
  {
    id: "project-storage-private-link",
    type: "ZERO-TRUST STORAGE · NETWORKING",
    title: "Azure Storage Private Link & Private DNS",
    desc: "Production-grade modular Terraform reference architecture establishing zero-public-access Azure Storage via dedicated Private Endpoints (Blob, File, Queue, Table), Private DNS zone groups, and NSG inspection.",
    components: ["Private Link", "Dedicated PE per Subresource", "Private DNS Zones", "Zero Public Access", "Entra ID RBAC Only", "TFLint & Checkov CI"],
    objective: "Eliminate public storage exposure and shared access keys with automated DNS CNAME delegation and data-plane RBAC.",
    links: [
      { title: "GitHub Repo", url: "https://github.com/sanjiivsingh/azure-storage-private-link-terraform", type: "github" },
      { title: "Architecture ADRs", url: "https://github.com/sanjiivsingh/azure-storage-private-link-terraform/blob/main/docs/ADR/0001-per-subresource-private-endpoints.md", type: "docs" },
      { title: "Verification Evidence", url: "https://github.com/sanjiivsingh/azure-storage-private-link-terraform/blob/main/docs/EVIDENCE.md", type: "docs" }
    ]
  },
  {
    id: "project-governance",
    type: "POLICY AS CODE · GOVERNANCE",
    title: "Azure Landing Zone Governance as Code",
    desc: "Enterprise Azure Policy as Code and subscription governance: custom policy initiatives enforcing location restrictions, mandatory FinOps tagging (CostCenter, Owner), and TLS 1.2+ storage restrictions.",
    components: ["Management Groups", "Custom Policy Definitions", "Tag Enforcement", "Location Guardrails", "TLS 1.2+ Restrict"],
    objective: "Enforce continuous automated organizational governance and audit compliance across Azure subscriptions.",
    links: [
      { title: "GitHub Repo", url: "https://github.com/sanjiivsingh/azure-landing-zone-governance", type: "github" },
      { title: "Audit Evidence", url: "https://github.com/sanjiivsingh/azure-landing-zone-governance/blob/main/docs/EVIDENCE.md", type: "docs" }
    ]
  },
  {
    id: "project-observability",
    type: "OBSERVABILITY · TELEMETRY",
    title: "Azure Observability Baseline & Central Telemetry",
    desc: "Centralized Azure Monitor foundation: Log Analytics workspace with automated daily ingestion cap alerts, reusable diagnostic settings child module, and curated KQL query packs.",
    components: ["Log Analytics Workspace", "Diagnostic Settings Module", "Daily Cap Alerting", "Curated KQL Pack", "Action Groups"],
    objective: "Consolidate multi-tier application and infrastructure telemetry with proactive alerts that prevent runaway ingestion bills.",
    links: [
      { title: "GitHub Repo", url: "https://github.com/sanjiivsingh/azure-observability-baseline", type: "github" },
      { title: "KQL Query Pack", url: "https://github.com/sanjiivsingh/azure-observability-baseline/blob/main/kql/security_and_ops_pack.kql", type: "docs" }
    ]
  },
  {
    id: "project-finops",
    type: "FINOPS · COST AUTOMATION",
    title: "Azure FinOps Guardrails & Infracost CI Gates",
    desc: "Enterprise FinOps guardrails as Terraform code: subscription consumption budgets, multi-tier forecast/actual spend alerts, Azure Policy tag enforcement, and Infracost CI shift-left cost automation.",
    components: ["Consumption Budgets", "Forecast Overrun Alerts", "Tag Audit Policy", "Infracost PR Gate"],
    objective: "Prevent cloud billing surprises by shifting infrastructure cost estimation directly into developer pull requests.",
    links: [
      { title: "GitHub Repo", url: "https://github.com/sanjiivsingh/azure-finops-guardrails", type: "github" },
      { title: "Architecture ADRs", url: "https://github.com/sanjiivsingh/azure-finops-guardrails/blob/main/docs/ARCHITECTURE.md", type: "docs" }
    ]
  },
  {
    id: "project-dr-runbooks",
    type: "RELIABILITY · DISASTER RECOVERY",
    title: "Sanitized Azure Disaster Recovery Runbooks",
    desc: "Production-ready Disaster Recovery runbooks as code and markdown: AKS state restoration with Velero, Key Vault soft-delete recovery, Geo-Redundant Storage failover, and sandbox drill logs.",
    components: ["AKS Velero Restoration", "Key Vault Recovery", "Storage Account Failover", "ShellCheck CI", "Sandbox Drill Logs"],
    objective: "Deterministic disaster recovery procedures with code-driven automation and tested drill logs.",
    links: [
      { title: "GitHub Repo", url: "https://github.com/sanjiivsingh/azure-dr-runbooks", type: "github" },
      { title: "Sandbox Drill Log", url: "https://github.com/sanjiivsingh/azure-dr-runbooks/blob/main/drills/2026-sandbox-drill-log.md", type: "docs" }
    ]
  }
];

export const principles = [
  { icon: Recycle, title: "Infrastructure as Code", text: "Version controlled, peer reviewed, tested, automated and documented — 0 manual portal changes." },
  { icon: ShieldCheck, title: "Zero-Trust Security", text: "Security controls engineered into the foundation across private endpoints and identity perimeters." },
  { icon: Terminal, title: "Automation First", text: "Repeated manual cloud & server operations are converted into scalable automation scripts and CI/CD pipelines." },
  { icon: KeyRound, title: "Least Privilege Access", text: "Access strictly granted per workload and operational need via PIM, Workload Identity & temporary credentials." },
  { icon: Puzzle, title: "Reproducible Infra", text: "Every cloud environment can be completely rebuilt from source-controlled IaC definitions." },
  { icon: Eye, title: "Observability by Default", text: "Telemetry, structured logs, and automated alerts to monitor platform health and cost anomalies from day one." },
  { icon: Boxes, title: "Modular Architecture", text: "Workloads packaged as reusable, decoupled Terraform modules suitable for enterprise scale." },
  { icon: Gauge, title: "Operational Readiness", text: "Disaster recovery runbooks, DR automation, and handover documentation so engineering teams operate seamlessly." }
];

export const deliveryProcess = [
  ["01", "Discover", "Evaluate business requirements, existing infrastructure, security controls, and target operating model."],
  ["02", "Design", "Define Azure CAF architecture, AI landing zones, network boundaries, identity federation, and security guardrails."],
  ["03", "Build", "Implement reusable Terraform modules, DevSecOps CI/CD pipelines, container registries, and AI Gateway configurations."],
  ["04", "Secure", "Apply least privilege, secret vault rotation, policy-as-code, SAST scanning (Checkov/tfsec), and container hygiene."],
  ["05", "Automate", "Automate validation, planning, artifact promotion, release approvals, and zero-downtime deployment."],
  ["06", "Operate", "Establish centralized monitoring, automated alerting, backup procedures, runbooks, and client team handover."]
];

export const stack = [
  ["Enterprise AI Infrastructure", "Azure OpenAI Service (GPT-4o, text-embedding-3) · Azure API Management (AI Gateway) · Azure AI Search (Vector RAG) · Semantic Caching · Token Rate Limiting (TPM/RPM)"],
  ["Cloud Platforms", "Microsoft Azure (CAF Landing Zones, Multi-Subscription Governance, Management Groups) · Cloud Architecture"],
  ["Infrastructure as Code", "Terraform 1.9+ · OpenTofu · Terragrunt · AzureRM Provider · Remote State Locking · TFLint"],
  ["DevSecOps & SAST Security", "Checkov SAST · tfsec · Trivy Container Scanner · Gitleaks · GitHub Actions · Azure DevOps Pipelines · OIDC Workload Identity"],
  ["Kubernetes & Containers", "Azure Kubernetes Service (AKS) · Docker · Workload Identity Federation · Calico Network Security Policies · Key Vault CSI Driver · Helm · Ingress NGINX"],
  ["Cloud Networking & Security", "Hub-and-Spoke VNets · Azure Firewall Standard · Azure Bastion · User-Defined Routes (UDR) · Spoke-to-Spoke Inspection · Private Endpoints · Private DNS Zones"],
  ["Identity & Key Governance", "Microsoft Entra ID (Azure AD) · Role-Based Access Control (RBAC) · Azure Key Vault Standard · Customer-Managed Keys (CMK)"],
  ["Observability & FinOps", "Azure Monitor · Log Analytics Workspaces · Application Insights · Diagnostic Settings · Azure Consumption Budgets · Infracost · KQL Packs"],
  ["Banking Risk & Compliance", "State Bank of India (SBI) Operational Risk Controls · Regulatory Audit Trails · CIS Azure Benchmark v2.0 · Least-Privilege Separation of Duties"]
];
