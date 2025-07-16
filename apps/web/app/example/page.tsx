import image1 from './Homestead_1.png';
import image2 from './Homestead_2.jpg';
import image3 from './Homestead_3.jpg';
import image4 from './Homestead_4.jpg';
import image5 from './Homestead_5.jpg';
import image6 from './Homestead_6.jpg';
import image7 from './Homestead_7.jpg';
import image8 from './Homestead_8.jpg';
import image9 from './Homestead_9.jpg';
import image10 from './Homestead_10.jpg';
import image11 from './Homestead_11.jpg';
import styles from './page.module.css';
import { Infobox } from './infobox';
import { preload } from 'react-dom';

export default function ExamplePage() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ]

  preload(images[0].src, { as: 'image', fetchPriority: 'high' });

  const [/*intro,*/ ...others] = images;

  return (
    <div className={styles.page}>
      <div className={styles.info}>
        <Infobox/>
      </div>
      <div className={styles.gallery}>
        {/* <div className={styles.intro} style={{ '--aspect-ratio': intro.width / intro.height }}>
          <div className={styles.introCard}>
            <div>Example</div>
            <div style={{ fontSize: 32 }}>by darthmaim</div>
          </div>
          <img className={styles.img} src={intro.src}/>
        </div> */}
        {others.map((slide) => (
          <div key={slide.src} className={styles.slide}>
            <div className={styles.slideBg} style={{ backgroundImage: `url(${slide.src})` }}/>
            <img className={styles.img} src={slide.src}/>
          </div>
        ))}
      </div>
    </div>
  )
}
