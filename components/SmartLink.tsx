import { Github, ExternalLink, LockKeyhole } from "lucide-react";

interface SmartLinkProps {
  href?: string;
  label: string;
  type?: "github" | "live" | "demo" | "docs";
  fallbackText?: string;
}

/**
 * SmartLink renders a functional hyperlink if `href` exists and is non-empty.
 * If `href` is missing or empty, it degrades gracefully into a clean, inactive tech badge.
 */
export function SmartLink({
  href,
  label,
  type = "live",
  fallbackText = "Link pending"
}: SmartLinkProps) {
  const isValid = Boolean(href && href.trim().length > 0 && href !== "#");

  if (isValid) {
    return (
      <a
        className="smart-link-active"
        href={href}
        target="_blank"
        rel="noreferrer"
        title={`Open ${label}`}
      >
        {type === "github" ? <Github size={13} /> : <ExternalLink size={13} />}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <span className="smart-link-inactive" title="URL will be added by owner">
      <LockKeyhole size={11} />
      <span>{label} ({fallbackText})</span>
    </span>
  );
}
