import styles from "./section.module.scss";

export interface ISectionProps {
    id: string;
    className?: string;
    style?: React.CSSProperties;
    title: string;
    subtitle?: string;
    isTitleSeparatorVisible?: boolean;
    children?: JSX.Element;
}

export const Section = ({
    id,
    className = "",
    style = {},
    title,
    subtitle,
    isTitleSeparatorVisible = true,
    children
}: ISectionProps) => {
    return (
        <section id={id} style={style} className={`${className} ${styles["section"]}`}>
            <header>
                <h2 className={styles["title"]}>{title}</h2>
                {isTitleSeparatorVisible && <div className={styles["spacer"]} />}
                <h3 className={styles["subtitle"]}>{subtitle}</h3>
            </header>
            <div>{children}</div>
        </section>
    );
};
