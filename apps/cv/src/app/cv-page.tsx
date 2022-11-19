import styles from "./cv-page.module.scss";
import { Header, Section, SocialMediaIcon, INavigationItem, Icon, Timeline, TimelineItem } from "@cv/components";

export const CVPage = () => {
    const navigationItems: INavigationItem[] = [
        {
            targetElementId: "about",
            text: "About me"
        },
        {
            targetElementId: "hobbies",
            text: "Hobbies"
        },
        {
            targetElementId: "about-cv",
            text: "About this CV"
        },
        {
            targetElementId: "skills",
            text: "Skills"
        },
        {
            targetElementId: "timeline",
            text: "Timeline"
        },
        {
            targetElementId: "contact",
            text: "Contact"
        }
    ];

    return (
        <div className={styles["cv"]}>
            <Header className={styles["header"]} name="Tiago Braga Fernandes" navigationItems={navigationItems} />
            <Section
                id="welcome"
                style={{ background: "url(/assets/welcome-background.jpg) no-repeat 50%", backgroundSize: "cover" }}
                className={styles["welcome"]}
                title="Tiago Braga Fernandes"
                subtitle="Software Engineer"
                isTitleSeparatorVisible={false}>
                <>
                    <SocialMediaIcon icon="/assets/linkedin.png" href="https://pt.linkedin.com/in/tbragaf" />
                    <SocialMediaIcon icon="/assets/github.png" href="https://github.com/tbragaf" />
                    <SocialMediaIcon icon="/assets/instagram.png" href="https://www.instagram.com/tbragaf" />
                </>
            </Section>
            <Section
                id="about"
                className={styles["about"]}
                title="About me"
                subtitle="Full-time learner and eager to leave my mark">
                <div className={styles["about-content"]}>
                    <img src="/assets/profile.png" alt="" className={styles["about-image"]} />
                    <div className={styles["about-text"]}>
                        <p>
                            I am hard-working, team oriented and motivated guy who loves tech talks and listen to great
                            people. Other than my passion for technology, I also enjoy talking about the universe and
                            politics.
                        </p>
                        <p>
                            I thrive to have a nice enviroment to work with and, for the years to come, I look forward
                            to work with the most talented and creative people to team up with.
                        </p>
                    </div>
                </div>
            </Section>
            <Section id="hobbies" className={styles["hobbies"]} title="Things I like">
                <div className={styles["hobbies-content"]}>
                    <Icon source="/assets/users.svg" description="Friends" />
                    <Icon source="/assets/gym.svg" description="Working out" />
                    <Icon source="/assets/cooking.svg" description="Cooking" />
                    <Icon source="/assets/beers.svg" description="Have a beer" />
                </div>
            </Section>
            <Section id="tools" className={styles["tools"]} title="What I used for this website">
                <div className={styles["tools-content"]}>
                    <Icon source="/assets/react.png" description="React" />
                    <Icon source="/assets/typescript.png" description="Typescript" />
                    <Icon source="/assets/nx.png" description="Nx" />
                    <Icon source="/assets/sass.png" description="Sass" />
                </div>
            </Section>
            <Section id="timeline" className={styles["timeline"]} title="What I've been doing">
                <div className={styles["timeline-content"]}>
                    <Timeline className="timeline">
                        <TimelineItem
                            date="2022-Present"
                            company="OutSystems"
                            role="Lead Software Engineer"
                            description={
                                <div>
                                    In late 2022, I moved to a new group while still working on the OutSystems IDE. I
                                </div>
                            }
                        />
                        <TimelineItem
                            date="2020-2022"
                            company="OutSystems"
                            role="Senior Software Engineer"
                            description={
                                <div>
                                    <p>
                                        In 2020, I jumped to a more senior role at Mac IDE team. I worked on a cross
                                        platform Drag&Drop mechanism and continued with the migration of our technology
                                        stack.
                                    </p>
                                    <p>
                                        In late 2021, at Mac IDE team we launched Service Studio GA version for Mac OS.
                                        We then all moved to a new team "O11 IDE Team" to continue the previous work and
                                        replace the legacy version for Windows OS.
                                    </p>
                                </div>
                            }
                        />
                        <TimelineItem
                            date="2019-2020"
                            company="OutSystems"
                            role="Software Engineer"
                            description={
                                <div>
                                    I was one of the first members of the Mac IDE team which aims at delivering the IDE
                                    our customers love to different operative systems. Part of our work is related with
                                    the migration of our technology stack.
                                </div>
                            }
                        />
                        <TimelineItem
                            date="2017-2019"
                            company="OutSystems"
                            role="Software Engineer"
                            description={
                                <div>
                                    I've been part of the Collaboration team which aims at increasing teams'
                                    productivity and performance with improved collaborative and work sharing
                                    capabilities. Part of our work is related with version control and merge
                                    capabilities inside the OutSystems platform.
                                </div>
                            }
                        />
                        <TimelineItem
                            date="2017"
                            company="OutSystems"
                            role="Master degree student"
                            description={
                                <>
                                    <div>
                                        I've published my master's degree thesis entitled{" "}
                                        <i>
                                            Suporte para Refatorização Automática de Lógica de Negócio baseada em
                                            Modelos
                                        </i>
                                        , November 2017.
                                        <p>
                                            More information about the thesis can be found{" "}
                                            <a className={styles["link"]} href="https://hdl.handle.net/1822/79855/">
                                                here
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <div>
                                        At the same time, OutSystems challenged me to publish an article on the same
                                        topic entitled <i>Support for Automatic Refactoring of Business Logic</i> which
                                        was accepted as regular paper to appear in the proceedings of the{" "}
                                        <a className={styles["link"]} href="http://inforum.org.pt/INForum2017">
                                            9th National Informatics Symposium
                                        </a>
                                        , October 2017.
                                    </div>
                                </>
                            }
                        />
                        <TimelineItem
                            date="2015-2017"
                            company="University of Minho"
                            role="Master degree student"
                            description={
                                <div>
                                    My master's degree started in 2014 and ended in 2017. At the same time I started my
                                    professional career. My master's degree was focused on{" "}
                                    <a
                                        className={styles["link"]}
                                        href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/EA.html">
                                        Applications Engineering
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        className={styles["link"]}
                                        href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/BI.html">
                                        Business Intelligence
                                    </a>
                                    . <p></p>{" "}
                                    <p>
                                        More information about the course can be found{" "}
                                        <a className={styles["link"]} href="http://mei.di.uminho.pt/">
                                            here
                                        </a>
                                        .
                                    </p>
                                </div>
                            }
                        />
                        <TimelineItem
                            date="2014-2016"
                            company="Wintouch"
                            role="Software Engineer"
                            description={
                                <div>
                                    I've been part of the core team of the developmente of a SAAS product, to be
                                    released at the end of 2016. I've developed RESTful web services since April of 2015
                                    (C#) and web component based applications (Angular2)."
                                </div>
                            }
                        />
                        <TimelineItem
                            date="2011-2014"
                            company="University of Minho"
                            role="Licentiate's degree student"
                            description={
                                <div>
                                    My Licenciate's degree started in 2011 and ended 3 years later. After that I started
                                    my master's degree as well as my professional career. <p></p>{" "}
                                    <p>
                                        More information about the course can be found{" "}
                                        <a className={styles["link"]} href="http://lei.di.uminho.pt/">
                                            here
                                        </a>
                                        .
                                    </p>
                                </div>
                            }
                        />
                    </Timeline>
                </div>
            </Section>
        </div>
    );
};
