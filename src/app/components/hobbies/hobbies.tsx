import * as React from 'react';
import { Hobby } from './hobby/hobby';

export class Hobbies extends React.Component {
    render() {
        return (
            <section id="page-hobbies">
                <div className="container">
                    <header className="section-header">
                        <h2 className="section-title"><span>Hobbies</span></h2>
                        <div className="spacer"></div>
                        <p className="section-subtitle"></p>
                    </header>
                    <div className="hobbies-info">
                        <Hobby name="Friends" icon="fa fa-users" />
                        <Hobby name="Gym" icon="custom-icon fa fa-gym" />
                        <Hobby name="Technology" icon="custom-icon fa fa-computer" />
                        <Hobby name="Cooking" icon="custom-icon fa fa-cook" />
                        <Hobby name="Suit up" icon="custom-icon fa fa-bow-tie" />
                    </div>
                </div>
            </section>
        );
    }
}