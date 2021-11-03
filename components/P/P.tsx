import styles from "./P.module.css";
import { PProps } from "./P.props";

export const P = ({ size = "m", children, ...props }: PProps): JSX.Element => (
  <p className={`${styles.p} ${styles[size]}`} {...props}>
    {children}
  </p>
);
