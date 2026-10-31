import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjeevsingh.oneps.in"),
  title: "Sanjeev Singh | Azure DevSecOps & Cloud Infrastructure Freelance Engineer",
  description:
    "Sanjeev Singh is a senior freelance Azure DevSecOps and cloud infrastructure engineer specializing in Azure Landing Zones, Terraform, Azure networking, AKS platform engineering, DevSecOps CI/CD and cloud security automation.",
  keywords: [
    "Sanjeev Singh",
    "Sanjeev Singh freelancer",
    "Azure DevSecOps engineer",
    "Azure Landing Zone",
    "Terraform freelancer",
    "Azure cloud infrastructure engineer",
    "AKS platform engineering",
    "Kubernetes security",
    "GitHub Actions Azure OIDC",
    "Azure DevOps pipelines",
    "Azure networking hub and spoke",
    "Azure security governance",
    "cloud infrastructure freelancer",
    "DevSecOps automation",
    "Azure Policy",
    "Microsoft Defender for Cloud"
  ],
  authors: [{ name: "Sanjeev Singh" }],
  creator: "Sanjeev Singh",
  openGraph: {
    title: "Sanjeev Singh | Azure DevSecOps & Cloud Infrastructure Freelance Engineer",
    description:
      "Designing, securing and automating production-grade Azure platforms — Landing Zones, Terraform, AKS, DevSecOps CI/CD and cloud governance.",
    url: "https://sanjeevsingh.oneps.in",
    siteName: "Sanjeev Singh Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjeev Singh | Azure DevSecOps & Cloud Infrastructure Freelance Engineer",
    description:
      "Designing, securing and automating production-grade Azure platforms — Landing Zones, Terraform, AKS, DevSecOps CI/CD and cloud governance."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
