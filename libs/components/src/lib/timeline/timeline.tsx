import styles from "./timeline.module.scss";

export interface ITimelineProps {
    className?: string;
    children: React.ReactNode;
}

export const Timeline = ({ className, children }: ITimelineProps) => {
    return <div className={`${className} ${styles["timeline"]}`}>{children}</div>;
};
