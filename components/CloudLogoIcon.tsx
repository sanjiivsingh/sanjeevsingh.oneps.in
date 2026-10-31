import { HardDrive } from "lucide-react";

export function CloudLogoIcon({ type }: { type: "azure" | "aws" | "gcp" | "onprem" }) {
  if (type === "azure") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.05 2.25L3.6 15.3H9.45L13.05 2.25Z" fill="#0078D4"/>
        <path d="M9.45 15.3L6.3 19.8H20.4L13.05 9.45L9.45 15.3Z" fill="#50E6FF"/>
      </svg>
    );
  }
  if (type === "aws") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10.05C18.67 6.52 15.64 3.9 12 3.9C9.11 3.9 6.6 5.54 5.35 8.05C2.34 8.36 0 10.91 0 14.1C0 17.41 2.69 20.1 6 20.1H19C21.76 20.1 24 17.86 24 15.1C24 12.44 21.93 10.27 19.35 10.05Z" fill="#6366F1" opacity="0.85"/>
      </svg>
    );
  }
  if (type === "gcp") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill="#059669" opacity="0.2"/>
        <path d="M12 6V18M6 12H18" stroke="#059669" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    );
  }
  return <HardDrive size={22} color="#d97706" />;
}
