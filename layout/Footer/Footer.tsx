import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { format } from "date-fns";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  console.log(props);
  return (
    <footer {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Всі права захищені</div>
      <a href="3" target="_blank">
        Угода користувача
      </a>
      <a href="#" target="_blank">
        Політика конфіденційності
      </a>
    </footer>
  );
};
