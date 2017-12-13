import * as React from 'react';
import * as $ from 'jquery';

export class Header extends React.Component {
  render() {    
    return (
      <header>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
                    <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon fa fa-bars"></span>
                    </button>
                    <a id="logo" href="#page-welcome" className="navbar-brand">
                        <span className="navbar-name">Tiago Braga</span>
                    </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
                    <ul className="nav navbar-nav navbar-right" id="main-menu">
                      <li data-toggle="collapse" data-target="#navbar"><a href="#page-profile">About me</a></li>
                      <li data-toggle="collapse" data-target="#navbar"><a href="#page-hobbies">Hobbies</a></li>
                      <li data-toggle="collapse" data-target="#navbar"><a href="#page-skills">Skills</a></li>
                      <li data-toggle="collapse" data-target="#navbar"><a href="#page-timeline">Timeline</a></li>
                      <li data-toggle="collapse" data-target="#navbar"><a href="#page-contact">Contact</a></li>
                    </ul>
                </div>
          </div>
        </nav>
      </header>
    );
  }
}
