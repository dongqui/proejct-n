"use client";

import { useEffect, useState } from "react";
import { company } from "./company";

type CopyState = "idle" | "copied" | "failed";

const COPY_LABEL: Record<CopyState, string> = {
  idle: "주소 복사",
  copied: "복사됨",
  failed: "복사 실패",
};

/** 클립보드 API가 막힌 환경을 위한 구형 복사 방식 */
function legacyCopy(text: string): boolean {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(el);
  return ok;
}

export function ContactActions() {
  const [copy, setCopy] = useState<CopyState>("idle");

  useEffect(() => {
    if (copy === "idle") return;
    const t = setTimeout(() => setCopy("idle"), 2000);
    return () => clearTimeout(t);
  }, [copy]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopy("copied");
      return;
    } catch {
      // 아래 구형 방식으로 재시도
    }
    setCopy(legacyCopy(company.email) ? "copied" : "failed");
  }

  return (
    <div className="contact__actions">
      <span className="contact__email">{company.email}</span>
      <button
        type="button"
        className="contact__link"
        onClick={copyEmail}
        aria-live="polite"
      >
        {COPY_LABEL[copy]}
      </button>
    </div>
  );
}
