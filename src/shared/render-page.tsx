import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export function renderPage(page: ReactNode) {
    createRoot(document.getElementById("root") as HTMLElement).render(page);
}
