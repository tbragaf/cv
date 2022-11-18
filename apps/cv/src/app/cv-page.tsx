import styles from "./cv-page.module.scss";
import { Header, Section, SocialMediaIcon, INavigationItem, Icon } from "@cv/components";

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
        </div>
    );
};
