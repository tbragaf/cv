import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import type { Route } from "./route";

export interface IPageLayoutProps {
    currentRoute: Route;
    children: ReactNode;
}

export function PageLayout({ currentRoute, children }: IPageLayoutProps) {
    return (
        <>
            <SiteHeader currentRoute={currentRoute} />
            <main>{children}</main>
            <SiteFooter />
        </>
    );
}
