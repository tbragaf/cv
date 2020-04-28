import React from "react";
import "./TimelineItem.scss";

export interface ITimelineItemProps {
    date: string;
    company: string;
    role: string;
    description: JSX.Element;
}

export const TimelineItem = (props: ITimelineItemProps) => {
    return (
        <div className="timeline-item">
            <div className="point" />
            <div className="info">
                <p className="date">{props.date}</p>
                <h2 className="company">{props.company}</h2>
                <p className="role">{props.role}</p>
            </div>
            <div className="description">{props.description}</div>
        </div>
    );
};