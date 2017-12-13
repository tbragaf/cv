import * as React from 'react';
import { Skill } from './skill/skill';

export class Skills extends React.Component {
    render() {
        return (
            <section id="page-skills">
            <div className="container">
    
                <header className="section-header">
                    <h2 className="section-title"><span>Skills</span></h2>
                    <div className="spacer"></div>
                    <p className="section-subtitle"></p>
                </header>
                <div className="skills row">
                    <div className="col-sm-6">
                        <Skill name="JavaScript" value="90" />
                        <Skill name="Design Patterns" value="80" />
                        <Skill name="Rest APIs" value="80" />
                    </div>
                    <div className="col-sm-6">
                        <Skill name="Refactoring" value="70" />
                        <Skill name="Program Slicing" value="90" />
                        <Skill name="Metrics Analysis" value="80" />
                    </div>
                </div>
            </div>
        </section>
        );
    }
}