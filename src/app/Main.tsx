import React from "react";
import { Header, INavigationItem } from "./Views/Header/Header";
import { Section } from "./Views/Section/Section";
import { Icon } from "./Components/Icon/Icon";
import { Progress } from "./Components/Progress/Progress";
import { Timeline } from "./Components/Timeline/Timeline";
import { TimelineItem } from "./Components/Timeline/TimelineItem";
import profilePicture from "./assets/profile.png";
import usersIcon from "./assets/users.svg";
import gymIcon from "./assets/gym.svg";
import computerIcon from "./assets/computer.svg";
import cookingIcon from "./assets/cooking.svg";
import beersIcon from "./assets/beers.svg";
import reactIcon from "./assets/react.png";
import typescriptIcon from "./assets/typescript.png";
import htmlIcon from "./assets/html5.png";
import sassIcon from "./assets/sass.png";
import envelopeIcon from "./assets/envelope.svg";
import locationIcon from "./assets/location.svg";
import "./Main.scss";

export const Main = () => {
    const navigationItems: INavigationItem[] = [{
        targetElementId: "about",
        text: "About me"
    }, {
        targetElementId: "hobbies",
        text: "Hobbies"
    }, {
        targetElementId: "about-cv",
        text: "About this CV"
    }, {
        targetElementId: "skills",
        text: "Skills"
    }, {
        targetElementId: "timeline",
        text: "Timeline"
    }, {
        targetElementId: "contact",
        text: "Contact"
    }];

    return (
        <div className="main-page">
            <Header className="header" name="Tiago Braga" navigationItems={navigationItems} />
            <Section id="welcome" className="section" title="Tiago Braga Fernandes" subtitle="Software Engineer" isLineVisible={false}>
                <div className="welcome">
                    <a href="https://pt.linkedin.com/in/tbragaf" className="linkedin">
                        <div hidden>linkedin</div>
                    </a>
                    <a href="https://github.com/tbragaf" className="github">
                        <div hidden>github</div>
                    </a>
                    <a href="https://www.instagram.com/tbragaf" className="instagram">
                        <div hidden>instagram</div>
                    </a>
                </div>
            </Section>
            <Section id="about" className="section" title="About me" subtitle="Full-time learner and eager to leave my mark">
                <div className="about">
                    <img src={profilePicture} alt="" className="about-image" />
                    <div className="about-text">
                        <p>I am hard-working, team oriented and motivated guy who loves tech talks and listen to great people. Other than my passion for technology, I also enjoy talking about the universe and politics.</p>
                        <p>I thrive to have a nice enviroment to work with and, for the years to come, I look forward to work with the most talented and creative people to team up with.</p>
                    </div>
                </div>
            </Section>
            <Section id="hobbies" className="section" title="Things I like">
                <div className="hobbies">
                    <Icon icon={usersIcon} text="Friends" />
                    <Icon icon={gymIcon} text="Working out" />
                    <Icon icon={computerIcon} text="Technology" />
                    <Icon icon={cookingIcon} text="Cooking" />
                    <Icon icon={beersIcon} text="Have a beer" />
                </div>
            </Section>
            <Section id="about-cv" className="section" title="What I used to develop this CV">
                <div className="about-cv">
                    <Icon icon={reactIcon} text="React" />
                    <Icon icon={typescriptIcon} text="TypeScript" />
                    <Icon icon={htmlIcon} text="HTML" />
                    <Icon icon={sassIcon} text="Sass" />
                </div>
            </Section>
            <Section id="skills" className="section" title="Skills">
                <div className="skills">
                    <Progress valueInPercentage="100%" description="Teamwork" />
                    <Progress valueInPercentage="80%" description="Design patterns" />
                    <Progress valueInPercentage="95%" description="Empathy" />
                    <Progress valueInPercentage="85%" description="Object oriented programming" />
                    <Progress valueInPercentage="85%" description="Web technologies" />
                    <Progress valueInPercentage="80%" description="Refactoring" />
                </div>
            </Section>
            <Section id="timeline" className="section" title="Timeline">
                <Timeline className="timeline">
                    <TimelineItem date="2020-Present" company="OutSystems" role="Senior Software Engineer" description={<div>In 2020, I jumped to a more senior role at Mac IDE team. I worked on a cross platform Drag&Drop mechanism and continued with the migration of our technology stack.</div>} />
                    <TimelineItem date="2019-2020" company="OutSystems" role="Software Engineer" description={<div>I was one of the first members of the Mac IDE team which aims at delivering the IDE our customers love to different operative systems. Part of our work is related with the migration of our technology stack.</div>} />
                    <TimelineItem date="2017-2019" company="OutSystems" role="Software Engineer" description={<div>I've been part of the Collaboration team which aims at increasing teams' productivity and performance with improved collaborative and work sharing capabilities. Part of our work is related with version control and merge capabilities inside the OutSystems platform.</div>} />
                    <TimelineItem date="2017" company="OutSystems" role="Master degree student" description={<div>I've published my master's degree thesis entitled <i>Suporte para Refatorização Automática de Lógica de Negócio baseada em Modelos</i>, November 2017.</div>} />
                    <TimelineItem date="2017" company="OutSystems" role="Article author" description={<div>I've published an article entitled <i>Support for Automatic Refactoring of Business Logic</i> which was accepted as regular paper to appear in the proceedings of the <a className="link" href="http://inforum.org.pt/INForum2017">9th National Informatics Symposium</a>, October 2017.</div>} />
                    <TimelineItem date="2015-2017" company="University of Minho" role="Master degree student" description={<div>My master's degree started in 2014 and ended in 2017. At the same time I started my professional career. My master's degree was focused on <a className="link" href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/EA.html">Applications Engineering</a> and <a className="link" href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/BI.html">Business Intelligence</a>. <p></p> <p>More information about the course can be found <a className="link" href="http://mei.di.uminho.pt/">here</a>.</p></div>} />
                    <TimelineItem date="2014-2016" company="Wintouch" role="Software Engineer" description={<div>"I’ve been part of the core team of the developmente of a SAAS product, to be released at the end of 2016. I’ve developed RESTful web services since April of 2015 (C#) and web component based applications (Angular2)."</div>} />
                    <TimelineItem date="2011-2014" company="University of Minho" role="Licentiate’s degree student" description={<div>My Licenciate's degree started in 2011 and ended 3 years later. After that I started my master's degree as well as my professional career. <p></p> <p>More information about the course can be found <a className="link" href="http://lei.di.uminho.pt/">here</a>.</p></div>} />
                </Timeline>
            </Section>
            <Section id="contact" className="section" title="Contact me" subtitle="Get in touch">
                <div className="contact">
                    <Icon icon={envelopeIcon} text="braga.tiago.93@gmail.com" />
                    <Icon icon={locationIcon} text="Braga, Portugal" />
                </div>
            </Section>
        </div>
    );
}