import type { ReactNode } from "react";

export interface IPageSectionProps {
    id: string;
    title: string;
    subtitle?: string;
    className?: string;
    children: ReactNode;
}

export function PageSection({ id, title, subtitle, className, children }: IPageSectionProps) {
    return (
        <section id={id} className={className ? `section ${className}` : "section"}>
            <div className="section-content">
                <h2 className="section-title">{title}</h2>
                <div className="section-spacer" />
                {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
                {children}
            </div>
        </section>
    );
}
