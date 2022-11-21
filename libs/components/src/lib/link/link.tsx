import styles from "./link.module.scss";

export interface ILinkProps {
    text: string;
    href: string;
}

export const Link = ({ text, href }: ILinkProps) => {
    return (
        <a className={styles["link"]} href={href}>
            {text}
        </a>
    );
};
