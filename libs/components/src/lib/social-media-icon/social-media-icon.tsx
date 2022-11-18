import styles from "./social-media-icon.module.scss";

export interface ISocialMediaIconProps {
    icon: string;
    href: string;
}

export const SocialMediaIcon = ({ icon, href }: ISocialMediaIconProps) => {
    return (
        <a href={href} className={styles["social-media-icon"]}>
            <img src={icon} alt="" />
        </a>
    );
};
