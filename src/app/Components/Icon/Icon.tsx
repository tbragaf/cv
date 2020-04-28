import React from "react";
import "./Icon.scss";

export interface IIconProps {
    icon: string;
    text: string;
}

export const Icon = (props: IIconProps) => {
    return (
        <div className="icon-wrapper">
            <img src={props.icon} className="icon" alt="" />
            <span className="icon-text">{props.text}</span>
        </div>
    );
};