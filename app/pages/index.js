import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Site.module.css'
import maraudersMap from '../public/maraudersmap.jpg'

export default function Home() {
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
        <h1 className={styles.coverTitle}>I solemly swear that I am up to no good. Hehehe</h1>
      </div>
    </div>
  )
}
