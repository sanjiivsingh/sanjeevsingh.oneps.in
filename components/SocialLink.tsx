import React from "react";

interface SocialLinkProps {
  href?: string;
  label: string;
  children: React.ReactNode;
}

export function SocialLink({ href, label, children }: SocialLinkProps) {
  const isValid = Boolean(href && href.trim().length > 0 && href !== "#");

  if (isValid) {
    return (
      <a
        className="social-link-active"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        title={label}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      className="social-link-inactive"
      aria-label={`${label} (Unavailable)`}
      title={`${label} profile link pending`}
    >
      {children}
    </span>
  );
}
