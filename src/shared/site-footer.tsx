import { ExternalLink } from "./external-links";
import { Route } from "./route";

export function SiteFooter() {
    return (
        <footer className="site-footer">
            <span>
                © {new Date().getFullYear()} <a href={Route.Home}>Tiago Braga Fernandes</a>
            </span>
            <span>
                <a href={ExternalLink.GitHub}>GitHub</a> · <a href={ExternalLink.LinkedIn}>LinkedIn</a> ·{" "}
                <a href={ExternalLink.Email}>Email</a>
            </span>
        </footer>
    );
}
