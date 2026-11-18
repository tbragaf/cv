export interface IHeroProps {
    title: string;
}

export function Hero({ title }: IHeroProps) {
    return (
        <section className="hero">
            <p className="hero-name">Tiago Braga Fernandes</p>
            <h1>{title}</h1>
        </section>
    );
}
