import * as React from 'react';

export class Skill extends React.Component<any, any> {
    render() {
        return (
            <div className="skill-item">
                <h4 className="skill-name"> {this.props.name} </h4>
                <div className="progress">
                    <div className={`progress-bar progress-value-${this.props.value}`} role="progressbar" aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax="100">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        );
    }
}