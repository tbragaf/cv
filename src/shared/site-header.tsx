import { useState } from "react";
import { ExternalLink } from "./external-links";
import { Route } from "./route";

export interface ISiteHeaderProps {
    currentRoute: Route;
}

export function SiteHeader({ currentRoute }: ISiteHeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <a className="logo" href={Route.Home}>
                tbragaf
            </a>
            <button
                type="button"
                className="menu-toggle"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
                aria-controls="site-menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
            </button>
            <nav id="site-menu" className={isMenuOpen ? "site-menu open" : "site-menu"} aria-label="Main">
                <a href={Route.Home} aria-current={currentRoute === Route.Home ? "page" : undefined}>
                    Home
                </a>
                <a href={Route.Curriculum} aria-current={currentRoute === Route.Curriculum ? "page" : undefined}>
                    Curriculum vitae
                </a>
                <a href={ExternalLink.GitHub}>GitHub</a>
                <a href={ExternalLink.LinkedIn}>LinkedIn</a>
            </nav>
        </header>
    );
}
