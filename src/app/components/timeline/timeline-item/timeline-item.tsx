import * as React from 'react';

export class TimelineItem extends React.Component<any, any> {
    render() {
        return (
            <div className="timeline-item">
                <div className="timeline-point"></div>
                <div className="row">
                    <div className="col-md-4 timeline-info">
                        <p className="timeline-date">{this.props.date}</p>
                        <h4 className="timeline-company">{this.props.company}</h4>
                        <h6 className="timeline-role">{this.props.role}</h6>
                        <p className="timeline-location">{this.props.location}</p>
                    </div>
                    <div className="col-md-8 timeline-details">
                        <div className="timeline-info">{this.props.info}</div>
                    </div>
                </div>
            </div>
        );
    }
}