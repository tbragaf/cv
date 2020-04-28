import React from "react";
import "./Header.scss";

export interface IHeaderProps {
    className?: string;
    name: string;
    navigationItems: INavigationItem[];
}

export interface INavigationItem {
    targetElementId: string;
    text: string;
}

export const Header = (props: IHeaderProps) => {
    const navigationItems = props.navigationItems.map(i => {
        return (
            <li key={i.targetElementId} className="navigation-item">
                <a className="navigation-link" href={`#${i.targetElementId}`}>{i.text}</a>
            </li>
        );
    });

    return (
        <header className={props.className}>
            <nav className="navbar">
                <span className="name">{props.name}</span>
                <ul className="navigation-items">{navigationItems}</ul>
            </nav>
        </header>
    );
}
