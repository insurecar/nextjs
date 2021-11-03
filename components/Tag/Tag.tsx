import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag = ({
  size = "m",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => (
  <div className={`${styles.tag} ${styles[size]} ${styles[color]}`} {...props}>
    {href ? <a href={href}>{children}</a> : children}
  </div>
);
