export interface IHobbyIconProps {
    source: string;
    description: string;
}

export function HobbyIcon({ source, description }: IHobbyIconProps) {
    return (
        <div className="icon">
            <img src={source} alt="" />
            <span>{description}</span>
        </div>
    );
}
