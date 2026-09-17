"use client";

import { useEffect } from "react";

/** Keeps navigation available without JavaScript and enhances the mobile menu. */
export default function MenuEnhancement() {
  useEffect(() => {
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>("#navigation");
    if (!toggle || !nav) return;

    document.documentElement.classList.add("js");
    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    const toggleMenu = () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    const navigate = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a"))
        closeMenu();
    };
    const escape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        toggle.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
        toggle.focus();
      }
    };
    toggle.addEventListener("click", toggleMenu);
    nav.addEventListener("click", navigate);
    document.addEventListener("keydown", escape);
    return () => {
      toggle.removeEventListener("click", toggleMenu);
      nav.removeEventListener("click", navigate);
      document.removeEventListener("keydown", escape);
      document.documentElement.classList.remove("js");
    };
  }, []);

  return null;
}
