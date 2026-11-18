import type { ReactNode } from "react";

export interface IExperienceEntryProps {
    role: string;
    organization: string;
    period: string;
    tools?: string;
    children: ReactNode;
}

export function ExperienceEntry({ role, organization, period, tools, children }: IExperienceEntryProps) {
    return (
        <article className="timeline-item">
            <span className="timeline-point" />
            <header className="timeline-info">
                <p className="timeline-muted">{period}</p>
                <h3>{role}</h3>
                <p className="timeline-muted">{organization}</p>
            </header>
            <div className="timeline-description">
                {children}
                {tools ? <p className="timeline-muted">Tools: {tools}</p> : null}
            </div>
        </article>
    );
}
