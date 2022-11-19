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
                <h2 className={styles["company"]}>{company}</h2>
                <p className={styles["role"]}>{role}</p>
            </div>
            <div className={styles["description"]}>{description}</div>
        </div>
    );
};
