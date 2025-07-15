import styles from "./page.module.css";

import { Engagement } from 'next/font/google';

const font = Engagement({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className={`${styles.placeholder} ${font.className}`}>
      <h1 style={{ fontSize: 256, fontWeight: 'normal' }}>Homesteads</h1>
      <div style={{ fontSize: 80 }}>Coming soon...</div>
    </div>
  );
}
