import * as React from 'react';

export class About extends React.Component {

  render() {
    return (
        <section id="page-profile">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">About me</h2>
                    <div className="spacer"></div>
                    <p className="section-subtitle">Full-time learner and eager to leave my mark</p>
                </header>
                <div className="row">
                    <div className="col-md-3">
                        <div className="profile">
                        </div>
                    </div>
                    <div className="col-md-9">
                        <p className="justify">
                            I am hard-working, creative, motivated and punctual fellow who loves tech talks and listen to great people. Other than my
                            passion for computers and technology, I also enjoy talking about the universe and about political and economic matters.
                        </p>
                        <p className="justify">
                            For the years to come, I look forward to work with
                            the most talented and creative people to team up with and, hopefully, build a software company. Until then, I still
                            have much to learn as there is a long road ahead.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}


