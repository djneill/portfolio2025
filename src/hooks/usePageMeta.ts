import { useEffect } from "react";

type MetaConfig = {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogUrl?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown>;
};

function patchAttr(selector: string, attr: string, value: string): () => void {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return () => {};
  const prev = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return () => {
    if (prev === null) el.removeAttribute(attr);
    else el.setAttribute(attr, prev);
  };
}

export function usePageMeta({
  title,
  description,
  canonical,
  ogType,
  ogUrl,
  noIndex,
  jsonLd,
}: MetaConfig) {
  const jsonLdStr = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    if (title) {
      const prev = document.title;
      document.title = title;
      cleanups.push(() => {
        document.title = prev;
      });
    }

    if (description) {
      cleanups.push(patchAttr('meta[name="description"]', "content", description));
      cleanups.push(patchAttr('meta[property="og:description"]', "content", description));
      cleanups.push(patchAttr('meta[name="twitter:description"]', "content", description));
    }

    if (title) {
      cleanups.push(patchAttr('meta[property="og:title"]', "content", title));
      cleanups.push(patchAttr('meta[name="twitter:title"]', "content", title));
    }

    if (ogType) {
      cleanups.push(patchAttr('meta[property="og:type"]', "content", ogType));
    }

    if (ogUrl) {
      cleanups.push(patchAttr('meta[property="og:url"]', "content", ogUrl));
      cleanups.push(patchAttr('meta[property="twitter:url"]', "content", ogUrl));
    }

    if (canonical) {
      cleanups.push(patchAttr('link[rel="canonical"]', "href", canonical));
    }

    if (noIndex) {
      cleanups.push(patchAttr('meta[name="robots"]', "content", "noindex, nofollow"));
    }

    if (jsonLdStr) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-json-ld";
      script.textContent = jsonLdStr;
      document.head.appendChild(script);
      cleanups.push(() => script.parentNode?.removeChild(script));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [title, description, canonical, ogType, ogUrl, noIndex, jsonLdStr]);
}
