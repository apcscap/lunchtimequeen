import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Site.module.css'
import maraudersMap from '../public/maraudersmap.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    AOS.init()
  }, []) // use effect isn't dependent on anything
  
  return (
    <div className={styles.container}>
      <Head>
        <title>HB Isa</title>
      </Head>
      <div className={styles.coverPage}>
        <Image 
          src={maraudersMap}
          alt="Picture of map"
          layout="fill"
          objectFit="cover"
        /> 
      </div>
      <div className={styles.coverSpacer}>
        &nbsp;
      </div>
      <div className={styles.note1}>
        <img data-aos="fade-left" data-aos-duration="1000" className={`${styles.potterCards} ${styles.dracoPic}`} src="https://pbs.twimg.com/media/EjLZyVzXsAENuyO.jpg"/>
        <img data-aos="fade-up-right" data-aos-offset="5" data-aos-duration="500" className={`${styles.potterCards} ${styles.cedricPic}`} src="https://i.pinimg.com/originals/03/77/59/037759cd7db74ceb821bf0ad0139d04f.jpg"/>
        <h1 data-aos="fade-up" data-aos-offset="10"  className={styles.coverTitle}>I solemly swear that I am up to no good. Hehehe</h1>
      </div>
    </div>
  )
}
