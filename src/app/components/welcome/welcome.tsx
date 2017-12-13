import * as React from 'react';

export class Welcome extends React.Component {
  render() {
    return (
        <section id="page-welcome">
            <div className="container welcome-background">
                <div className="row">
                    <header className="centered">
                        <h1>Tiago Braga Fernandes</h1>
                        <p>Software Engineer</p>
                    </header>
                    <div className="social-icons">
                        <a href="https://pt.linkedin.com/in/tbragaf" className="btn btn-round btn-clear btn-linkedin"><i className="fa fa-linkedin-square"></i></a>
                        <a href="https://github.com/tbragaf" className="btn btn-round btn-clear btn-github"><i className="fa fa-github"></i></a>
                        <a href="https://www.instagram.com/tbragaf" className="btn btn-round btn-clear btn-instagram"><i className="fa fa-instagram"></i></a>
                    </div>
                    <a href="#page-contact" className="btn btn-default contact-me">Contact Me</a>
                </div>
            </div>
        </section>
    );
  }
}


