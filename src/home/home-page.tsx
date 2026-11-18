import { Hero } from "../shared/hero";
import { PageLayout } from "../shared/page-layout";
import { PageSection } from "../shared/page-section";
import { Route } from "../shared/route";

export function HomePage() {
    return (
        <PageLayout currentRoute={Route.Home}>
            <Hero title="Software Engineer" />
            <PageSection id="about" title="About me" subtitle="Full-time learner and eager to leave my mark">
                <div className="text">
                    <p>
                        I'm a Lead Software Engineer at OutSystems, working on the IDE side of the platform: ODC Studio
                        and Service Studio. Recently, I shipped Mentor, the AI assistant in ODC Studio, and now I help
                        my team build with agentic AI development.
                    </p>
                    <p>
                        Based in Braga, Portugal. Read my <a href={Route.Curriculum}>curriculum vitae</a>.
                    </p>
                </div>
            </PageSection>
        </PageLayout>
    );
}
