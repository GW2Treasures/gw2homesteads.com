import type { FC, ReactNode } from 'react';
import styles from './infobox.module.css';
import { Button } from '@/components/Button';

export const Infobox: FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>Example</div>
      <div className={styles.author}>by darthmaim</div>

      <div className={styles.tags}>
        <span>Janthir Wilds</span>
        <span>Example</span>
      </div>

      <p className={styles.description}>
        These are just some example images taken from the wiki.
      </p>

      <div className={styles.actions}>
        <Button>Download Layout</Button>
      </div>
    </div>
  )
};
