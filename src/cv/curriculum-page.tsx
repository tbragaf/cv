import { ExternalLink } from "../shared/external-links";
import { Hero } from "../shared/hero";
import { PageLayout } from "../shared/page-layout";
import { PageSection } from "../shared/page-section";
import { Route } from "../shared/route";
import { ExperienceEntry } from "./experience-entry";
import { HobbyIcon } from "./hobby-icon";

const mentorDocumentationUrl =
    "https://success.outsystems.com/documentation/outsystems_developer_cloud/agentic_development/ai_development_in_mentor_studio/";

export function CurriculumPage() {
    return (
        <PageLayout currentRoute={Route.Curriculum}>
            <Hero title="Software Engineer" />
            <nav className="section-menu" aria-label="Sections">
                <a href="#about">About me</a>
                <a href="#hobbies">Hobbies</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </nav>

            <PageSection id="about" title="About me" subtitle="Full-time learner and eager to leave my mark">
                <div className="about">
                    <img className="about-image" src="/assets/profile.jpg" alt="Tiago Braga Fernandes" />
                    <div className="text">
                        <p>
                            I am a hard-working, team-oriented and motivated guy who loves tech talks and listening to
                            great people. Other than my passion for technology, I also enjoy talking about the universe
                            and politics.
                        </p>
                        <p>
                            I thrive on a nice environment to work in and, for the years to come, I look forward to
                            working with the most talented and creative people to team up.
                        </p>
                    </div>
                </div>
            </PageSection>

            <PageSection id="hobbies" title="Things I like">
                <div className="icons">
                    <HobbyIcon source="/assets/users.svg" description="Friends" />
                    <HobbyIcon source="/assets/gym.svg" description="Working out" />
                    <HobbyIcon source="/assets/cooking.svg" description="Cooking" />
                    <HobbyIcon source="/assets/beers.svg" description="Have a beer" />
                </div>
            </PageSection>

            <PageSection id="experience" title="What I've been doing">
                <div className="timeline">
                    <ExperienceEntry
                        role="Lead Software Engineer"
                        organization="OutSystems"
                        period="2022 – Present"
                        tools="C#, TypeScript, React, Git, Claude Code">
                        <p>
                            In 2026, my team shipped <a href={mentorDocumentationUrl}>Mentor</a> in ODC Studio. I'm
                            still part of that team, improving how we build with agentic AI development and shipping
                            features like Mentor.
                        </p>
                        <p>
                            I help shape the architecture, align with other teams, and support and develop both ODC
                            Studio and Service Studio: the IDE side of the ODC and O11 platforms.
                        </p>
                    </ExperienceEntry>
                    <ExperienceEntry
                        role="Senior Software Engineer"
                        organization="OutSystems"
                        period="2020 – 2022"
                        tools="C#, TypeScript, React, Git">
                        <p>
                            In a more senior role in the Mac IDE team, I worked on the cross-platform drag and drop for
                            the IDE while migrating our legacy technology stack to a more recent one.
                        </p>
                        <p>
                            In late 2021 we launched the Service Studio GA version for macOS. We then moved to the O11
                            IDE team to replace the legacy version for Windows.
                        </p>
                    </ExperienceEntry>
                    <ExperienceEntry
                        role="Software Engineer"
                        organization="OutSystems"
                        period="2017 – 2020"
                        tools="C#, TypeScript, React, Git">
                        <p>
                            I started in the Collaboration team, which aims to increase teams' productivity with better
                            collaboration and work sharing, including version control and merge in the OutSystems
                            platform.
                        </p>
                        <p>
                            In 2019 I was one of the first members of the Mac IDE team, building a new IDE with the most
                            recent technologies.
                        </p>
                    </ExperienceEntry>
                    <ExperienceEntry
                        role="Software Engineer"
                        organization="Wintouch"
                        period="2014 – 2016"
                        tools="C#, Angular, SQL Server, Git">
                        <p>
                            I was part of the core team of a SaaS product released at the end of 2016. I developed
                            RESTful web services (C#) from April 2015, and web component based applications (Angular).
                        </p>
                    </ExperienceEntry>
                </div>
            </PageSection>

            <PageSection id="education" title="Education">
                <div className="timeline">
                    <ExperienceEntry
                        role="Licentiate and master's degree"
                        organization="University of Minho"
                        period="2011 – 2017">
                        <p>
                            Licentiate in 2011–2014, then a master's degree in 2014–2017 focused on{" "}
                            <a href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/EA.html">
                                Applications Engineering
                            </a>{" "}
                            and{" "}
                            <a href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/BI.html">Business Intelligence</a>.
                        </p>
                        <p>
                            My <a href="https://hdl.handle.net/1822/79855/">master's thesis</a>, done at OutSystems, was
                            on automatic refactoring of business logic based on models. It became the paper{" "}
                            <i>Support for Automatic Refactoring of Business Logic</i>, accepted at the{" "}
                            <a href="http://inforum.org.pt/INForum2017">9th National Informatics Symposium</a> (INForum
                            2017).
                        </p>
                    </ExperienceEntry>
                </div>
            </PageSection>

            <PageSection id="contact" title="Get in touch" className="contact">
                <div className="icons">
                    <a className="icon" href={ExternalLink.Email}>
                        <img src="/assets/envelope.svg" alt="" />
                        <span>braga.tiago.93@gmail.com</span>
                    </a>
                    <div className="icon">
                        <img src="/assets/location.svg" alt="" />
                        <span>Braga, Portugal</span>
                    </div>
                </div>
            </PageSection>
        </PageLayout>
    );
}
