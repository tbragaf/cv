import styles from "./header.module.scss";

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
    const navigationItems = props.navigationItems.map((i) => {
        return (
            <li key={i.targetElementId} className={styles["navigation-item"]}>
                <a className={styles["navigation-link"]} href={`#${i.targetElementId}`}>
                    {i.text}
                </a>
            </li>
        );
    });

    return (
        <header className={props.className}>
            <nav className={styles["navbar"]}>
                <span className={styles["name"]}>{props.name}</span>
                <ul className={styles["navigation-items"]}>{navigationItems}</ul>
            </nav>
        </header>
    );
};
