import React from "react";
import "./Section.scss";

export interface ISectionProps {
    id: string;
    className?: string;
    title: string;
    subtitle?: string;
    isLineVisible?: boolean;
    children: JSX.Element;
}

export const Section = (props: ISectionProps) => {
    const className = props.className || "section";
    const isLineVisible = props.isLineVisible === undefined ? true : props.isLineVisible;

    return (
        <section id={props.id} className={className}>
            <header>
                <h2 className="title">{props.title}</h2>
                {isLineVisible && <div className="spacer" />}
                <h3 className="subtitle">{props.subtitle}</h3>
                <div>{props.children}</div>
            </header>
        </section>
    );
};