import * as React from 'react';

export class Contact extends React.Component {
    render() {
        return (
            <section id="page-contact">
                <div className="container">
                    <header className="section-header">
                        <h2 className="section-title"><span>Contact</span></h2>
                        <div className="spacer"></div>
                        <p className="section-subtitle">Let's be friends, get in touch</p>
                    </header>
        
                    <div className="row contact-info">
                        <div className="col-sm-6">
                            <div className="profile-item">
                                <i className="fa fa-envelope-o"></i>
                                <p>braga.tiago.93@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="profile-item">
                                <i className="fa fa-map-marker"></i>
                                <p>
                                    <a href="https://www.google.pt/maps/place/Braga/" className="inverse">Braga, Portugal</a>
                                </p>
                            </div>
                        </div>
                        {/* <div className="col-sm-4">
                            <div className="profile-item">
                                <i className="fa fa-file-text-o"></i>
                                <h5>Please ask for my CV</h5>
                            </div>
                        </div> */}
                    </div>
        
                </div>
            </section>
        );
    }
}