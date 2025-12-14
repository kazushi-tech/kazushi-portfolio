import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function ExternalLinkButton({ href, children, className, ...rest }: Props) {
  const safeHref = (() => {
    try {
      const u = new URL(href);
      if (u.protocol !== "https:") throw new Error("Only https is allowed");
      return u.toString();
    } catch {
      // In development, we want to know if a URL is invalid immediately.
      // In production, we might want to fallback or log, but throwing is safer for now to prevent broken links.
      console.error(`Invalid external URL: ${href}`);
      return "#invalid-url";
    }
  })();

  if (safeHref === "#invalid-url") {
      return (
          <button className={`${className} opacity-50 cursor-not-allowed`} disabled>
              Invalid URL
          </button>
      )
  }

  return (
    <a
      href={safeHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
