import styles from "./icon.module.scss";

export interface IIconProps {
    source: string;
    description: string;
}

export const Icon = ({ source, description }: IIconProps) => {
    return (
        <div className={styles["icon"]}>
            <img src={source} className={styles["source"]} alt="" />
            <span className={styles["description"]}>{description}</span>
        </div>
    );
};
