import React from "react";
import "./Timeline.scss";

export interface ITimelineProps {
    className?: string;
    children: React.ReactNode;
}

export const Timeline = (props: ITimelineProps) => {
    return (
        <div className={props.className || "timeline"}>
            {props.children}
        </div>
    );
};