import styles from "./timeline-item.module.scss";

export interface ITimelineItemProps {
    date: string;
    company: string;
    role: string;
    description: React.ReactNode;
}

export const TimelineItem = ({ date, company, role, description }: ITimelineItemProps) => {
    return (
        <div className={styles["timeline-item"]}>
            <div className={styles["point"]} />
            <div className={styles["info"]}>
                <p className={styles["date"]}>{date}</p>
                <h2 className={styles["role"]}>{role}</h2>
                <span className={styles["company"]}>{company}</span>
            </div>
            <div className={styles["description"]}>{description}</div>
        </div>
    );
};
