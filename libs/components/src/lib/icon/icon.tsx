import styles from "./icon.module.scss";

export interface IIconProps {
    source: string;
    description?: string;
    className?: string;
}

export const Icon = ({ source, description, className }: IIconProps) => {
    return (
        <span className={`${className} ${styles["icon"]}`}>
            <img src={source} className={styles["source"]} alt="" />
            <span className={styles["description"]}>{description}</span>
        </span>
    );
};
