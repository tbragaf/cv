import * as React from 'react';
import { TimelineItem } from './timeline-item/timeline-item';

export class Timeline extends React.Component {
    render() {
        return (
            <section id="page-timeline">
                <div className="container">
                    <header className="section-header">
                        <h2 className="section-title"><span>Timeline</span></h2>
                        <div className="spacer"></div>
                        <p className="section-subtitle"></p>
                    </header>
                    <div className="timeline">
                        <TimelineItem date="2017-Present" company="OutSystems" role="Software Engineer" location="Braga, Portugal" info={<div>I've been part of the Collaboration team which aims at increasing teams' productivity and performance with improved collaborative and work sharing capabilities. Part of our work is related to version control and merge capabilities inside the OutSystems platform.</div>} />
                        <TimelineItem date="2017" company="OutSystems" role="Master degree student" location="Braga, Portugal" info={<div>I've published my master's degree thesis entitled <i>Suporte para Refatorização Automática de Lógica de Negócio baseada em Modelos</i>, November 2017.</div>} />
                        <TimelineItem date="2017" company="OutSystems" role="Article author" location="Aveiro, Portugal" info={<div>I've published an article entitled <i>Support for Automatic Refactoring of Business Logic</i> which was accepted as regular paper to appear in the proceedings of the <a href="http://inforum.org.pt/INForum2017" target="_blank">9th National Informatics Symposium</a>, October 2017.</div>} />
                        <TimelineItem date="2015-2017" company="University of Minho" role="Master degree student" location="Braga, Portugal" info={<div>My master's degree started in 2014 and ended in 2017. At the same time I started my professional career. My master's degree was focused on <a href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/EA.html" target="_blank">Applications Engineering</a> and <a href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/BI.html" target="_blank">Business Intelligence</a>. <p></p> <p>More information about the course can be found <a href="http://mei.di.uminho.pt/" target="_blank">here</a>.</p></div>} />
                        <TimelineItem date="2014-2016" company="Wintouch" role="Software Engineer" location="Braga, Portugal" info="I’ve been part of the core team of the developmente of a SAAS product, to be released at the end of 2016. I’ve developed RESTful web services since April of 2015 (C#) and web component based applications (Angular2)." />
                        <TimelineItem date="2011-2014" company="University of Minho" role="Licentiate’s degree student" location="Braga, Portugal" info={<div>My Licenciate's degree started in 2011 and ended 3 years later. After that I started my master's degree as well as my professional career. <p></p> <p>More information about the course can be found <a href="http://lei.di.uminho.pt/" target="_blank">here</a>.</p></div>} />
                    </div>
                </div>
            </section>
        );
    }
}

