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
        <title>Isa's HB Map</title>
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
        <h1 data-aos="fade-up" data-aos-offset="10"  className={styles.coverTitle}>I solemnly swear that I am up to no good. Hehehe</h1>
        <img data-aos="fade-left" data-aos-duration="1000" className={`${styles.potterCards} ${styles.dracoPic}`} src="https://pbs.twimg.com/media/EjLZyVzXsAENuyO.jpg"/>
        <img data-aos="fade-up-right" data-aos-offset="5" data-aos-duration="500" className={`${styles.potterCards} ${styles.cedricPic}`} src="https://i.pinimg.com/originals/03/77/59/037759cd7db74ceb821bf0ad0139d04f.jpg"/>
        <img data-aos="fade-up" data-aos-offset="10" className={`${styles.potterCards} ${styles.tomPic}`} src="https://qph.fs.quoracdn.net/main-qimg-1ab9bea2acf680fccf534ea7504a51e3-lq"/>
        <img className={`${styles.potterCards} ${styles.potterPic}`} src="https://cdn.onebauer.media/one/media/5c5c/5fdd/057f/581b/44a0/26a3/Harry%20Potter.jpeg?format=jpg&quality=80&width=900&ratio=1-1&resize=aspectfit%20480w,%20//cdn.onebauer.media/one/media/5c5c/5fdd/057f/581b/44a0/26a3/Harry%20Potter.jpeg?format=jpg&quality=80&width=500&ratio=1-1&resize=aspectfit%20100w"/>
      </div>
      <div className={styles.note2}>
        <p className={styles.letter1}>I hope you have a brilliant birthday today!! I remember in the summer that you expected a really nice website for your next birthday. So I spent the week supposedly meant for finals studying to make this website for you. I hope you enjoy! I mean you better enjoy this :)D. </p>
        <img className={`${styles.potterCards} ${styles.meme1}`} src="https://static.wikia.nocookie.net/9428343f-d1ec-4253-bba4-f3dc5793dc83"/>
        <img className={`${styles.potterCards} ${styles.meme2}`} src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/04/hp-change-1.jpg"/>
        <img className={`${styles.potterCards} ${styles.meme3}`} src="https://cdn.someecards.com/posts/harry-potter-memes-that-make-me-laugh-every-time-i-see-them-eTK.png"/>
      </div>
      <div className={styles.note3}>
        <img data-aos="fade-down-left" data-aos-offset="399" className={`${styles.harryBroom}`} src="https://freepngimg.com/thumb/harry_potter/23974-1-harry-potter-broom-transparent.png"/>
        <img data-aos="fade-up-right" data-aos-offset="399" className={`${styles.ginnyBroom}`} src="https://www.nicepng.com/png/full/384-3847312_harry-potter-broom-png-for-kids-ginny-weasley.png"/>
        <p className={styles.letter2}>Woah! Look at Harry and Ginny fly. They're really cool and talented. Do you know who else is super talented and cool? Yep, you guessed it, it's YOU!! I bet you're doing so many amazing things at berkeley. Either way I and a lot of other people know you're super dedicated and hardworking. I have faith you!</p>
      </div>
      {/* <div className={styles.note4}>
        <p className={styles.letter3}>I'll see you soon Isa during break! Have a excellent burf day!</p>
        <img src="https://wanna-joke.com/wp-content/uploads/2013/10/funny-picture-there-are-three-types-of-students.jpg"/>
      </div> */}

    </div>
  )
}
