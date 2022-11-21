import styles from "./cv-page.module.scss";
import { Header, Section, SocialMediaIcon, INavigationItem, Icon, Timeline, TimelineItem, Link } from "@cv/components";

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
            targetElementId: "tools",
            text: "About this CV"
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
        <div className={styles["cv-page"]}>
            <Header className={styles["header"]} name="Tiago Braga Fernandes" navigationItems={navigationItems} />
            <Section
                id="welcome"
                style={{ background: "url(/assets/welcome-background.jpg) no-repeat 50%", backgroundSize: "cover" }}
                className={`${styles["cv-section"]} ${styles["welcome"]}`}
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
                className={`${styles["cv-section"]} ${styles["about"]}`}
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
            <Section id="hobbies" className={`${styles["cv-section"]} ${styles["hobbies"]}`} title="Things I like">
                <div className={styles["hobbies-content"]}>
                    <Icon source="/assets/users.svg" description="Friends" />
                    <Icon source="/assets/gym.svg" description="Working out" />
                    <Icon source="/assets/cooking.svg" description="Cooking" />
                    <Icon source="/assets/beers.svg" description="Have a beer" />
                </div>
            </Section>
            <Section
                id="tools"
                className={`${styles["cv-section"]} ${styles["tools"]}`}
                title="What I used for this website">
                <>
                    <div className={styles["tools-content"]}>
                        <Icon source="/assets/react.png" description="React" />
                        <Icon source="/assets/typescript.png" description="Typescript" />
                        <Icon source="/assets/nx.png" description="Nx" />
                        <Icon source="/assets/sass.png" description="Sass" />
                    </div>
                    <div className={styles["tools-text"]}>
                        <p>
                            This website is one of those 2 birds 1 stone{" "}
                            <Icon source="/assets/sweat-smile.png" className={styles["inline-icon"]} />. I'm using it to
                            display my portfolio, while learning new things.
                        </p>
                        <p>
                            As of November 2022, I'm learning <Link text="nx.dev" href="https://nx.dev/" /> to help
                            generate code and the project structure. I also used it to learn how to host pages in{" "}
                            <Link text="github pages" href="https://pages.github.com/" />.
                        </p>
                        <p>
                            If you want to know more about the code behind this page, please follow the{" "}
                            <Link text="github page" href="https://github.com/tbragaf/cv/tree/development/" />.
                        </p>
                    </div>
                </>
            </Section>
            <Section
                id="timeline"
                className={`${styles["cv-section"]} ${styles["timeline"]}`}
                title="What I've been doing">
                <div className={styles["timeline-content"]}>
                    <Timeline className="timeline">
                        <TimelineItem
                            date="2022-Present"
                            company="OutSystems"
                            role="Lead Software Engineer"
                            description={
                                <p>
                                    In late 2022, I moved to a new team within while still working on the OutSystems
                                    IDE. As of today (November 2022), I can only say that new and amazing things are
                                    comming to OutSystems, so don't miss it.
                                </p>
                            }
                        />
                        <TimelineItem
                            date="2020-2022"
                            company="OutSystems"
                            role="Senior Software Engineer"
                            description={
                                <>
                                    <p>
                                        In 2020, I start working at a more senior role at <i>Mac IDE</i> team. This
                                        promotion got me working on the cross platform Drag&Drop mechanism for the IDE
                                        while continuing working on the migration of our technology stack.
                                    </p>
                                    <p>
                                        In late 2021, at <i>Mac IDE</i> team we launched Service Studio GA version for
                                        Mac OS. We then all moved to a new team <i>O11 IDE</i> team to continue the
                                        previous work and replace the legacy version for Windows OS.
                                    </p>
                                </>
                            }
                        />
                        <TimelineItem
                            date="2017-2020"
                            company="OutSystems"
                            role="Software Engineer"
                            description={
                                <>
                                    <p>
                                        Starting in 2017, I've been part of the Collaboration team which aims at
                                        increasing teams' productivity and performance with improved collaborative and
                                        work sharing capabilities. Part of our work is related with version control and
                                        merge capabilities inside the OutSystems platform.
                                    </p>
                                    <p>
                                        Later in 2019, I was one of the first members of the Mac IDE team which aims at
                                        delivering the IDE our customers love to different operative systems. Part of
                                        our work is related with the migration of our technology stack.
                                    </p>
                                </>
                            }
                        />
                        <TimelineItem
                            date="2014-2016"
                            company="Wintouch"
                            role="Software Engineer"
                            description={
                                <p>
                                    I've been part of the core team of the developmente of a SAAS product, to be
                                    released at the end of 2016. I've developed RESTful web services since April of 2015
                                    (C#) and web component based applications (Angular2)."
                                </p>
                            }
                        />
                        <TimelineItem
                            date="2011-2017"
                            company="University of Minho"
                            role="Licentiate and master degree"
                            description={
                                <>
                                    <p>
                                        My licenciate's degree started in 2011 and ended 3 years later. After that I
                                        started my master's degree as well as my professional career. More information
                                        about the course can be found{" "}
                                        <Link text="here" href="http://lei.di.uminho.pt/" />.
                                    </p>
                                    <p>
                                        My master's degree started in 2014 and ended in 2017. At the same time I started
                                        my professional career at Wintouch. My master's degree was focused on{" "}
                                        <Link
                                            text="Applications Engineering"
                                            href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/EA.html"
                                        />{" "}
                                        and{" "}
                                        <Link
                                            text="Business Intelligence"
                                            href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/BI.html"
                                        />
                                        . More information about the course can be found{" "}
                                        <Link text="here" href="http://mei.di.uminho.pt/" />.
                                    </p>
                                    <p>
                                        I joined OutSystems as a student for my master's thesis and the
                                        <i>
                                            Suporte para Refatorização Automática de Lógica de Negócio baseada em
                                            Modelos
                                        </i>
                                        artciel in November 2017. More information about the thesis can be found{" "}
                                        <Link text="here" href="https://hdl.handle.net/1822/79855/" />.
                                    </p>
                                    <p>
                                        At the same time, OutSystems challenged me to publish an article on the same
                                        topic entitled <i>Support for Automatic Refactoring of Business Logic</i> which
                                        was accepted as regular paper to appear in the proceedings of the{" "}
                                        <Link
                                            text="9th National Informatics Symposium"
                                            href="http://inforum.org.pt/INForum2017"
                                        />
                                        , October 2017.
                                    </p>
                                </>
                            }
                        />
                    </Timeline>
                </div>
            </Section>
            <Section
                id="contact"
                className={`${styles["cv-section"]} ${styles["contact"]}`}
                title="Get in touch"
                isTitleSeparatorVisible={false}>
                <div className={styles["contact-content"]}>
                    <Icon source="/assets/envelope.svg" description="braga.tiago.93@gmail.com" />
                    <Icon source="/assets/location.svg" description="Braga, Portugal" />
                </div>
            </Section>
        </div>
    );
};
