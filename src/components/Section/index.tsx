import { ReactNode } from 'react';
import styles from './styles.module.scss';
interface SectionProps {
  children: ReactNode;
  name: string;
  id: string
}

export function Section({ children, name,id }: SectionProps) {
  return (
    <section id={id} className={styles.Section}>
      
      {children}
    </section>
  );
}
