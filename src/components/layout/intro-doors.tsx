"use client";

import { useEffect } from "react";

const END_MS = 3300;

export function IntroDoors() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== "1") return;

    const end = () => {
      delete root.dataset.intro;
    };
    const timer = window.setTimeout(end, END_MS);
    const skip = () => {
      window.clearTimeout(timer);
      end();
    };

    window.addEventListener("keydown", skip, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  return (
    <div
      className="intro"
      aria-hidden
      onClick={() => {
        delete document.documentElement.dataset.intro;
      }}
    >
      <div className="intro-door l" />
      <div className="intro-door r" />
      <div className="intro-seal">寿司</div>
    </div>
  );
}