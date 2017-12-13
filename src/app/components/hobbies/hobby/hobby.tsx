import * as React from 'react';

export class Hobby extends React.Component<any, any> {
    render() {
        return (
            <div className="hobby-item">
                <i className={`icon ${this.props.icon}`}></i>
                <h5> {this.props.name} </h5>
            </div>
        );
    }
}