import { ReactNode } from "react";
import styles from "./styles.module.scss";
interface SectionProps {
  children: ReactNode;
  name: string;
  id: string;
}

export function Section({ children, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.Section} `}
      data-animate={"not-animate"}
    >
      {children}
    </section>
  );
}
