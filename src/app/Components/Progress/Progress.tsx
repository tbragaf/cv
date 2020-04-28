import React from "react";
import "./Progress.scss";

export interface IProgressProps {
    description: string;
    valueInPercentage: string;
}

export const Progress = (props: IProgressProps) => {
    return (
        <div className="progress">
            <h3 className="description">{props.description}</h3>
            <div className="progress-bar">
                <span style={{ width: props.valueInPercentage }} className="filled-bar" />
                <span style={{ width: "100%" }} className="bar" />
            </div>
        </div>
    );
};