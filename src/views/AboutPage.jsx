import styles from './AboutPage.module.css';
import heroImage from '../assets/vangoghmuseum-s0134V1962-800.jpg'

export default function AboutPage(){
    return(
        <div className={styles.aboutContainer}>
      <section className={styles.hero}>
         <h1>We grow better together.</h1>
        <div className={styles.heroImage}>
           
            <img src={heroImage}/>
            <p>Our Flower Plant Head Office in Copenhagen</p>

        </div>
        <div className={styles.heroText}>
                   

             <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Our Vision</h3>
          <p>Every home deserves a touch of nature. We strive to bring green life into urban spaces, one leaf at a time.</p>
        </div>

        <div className={styles.card}>
          <h3>Our Mission</h3>
          <p>Building a bridge between plant lovers. We provide a space to swap tips, trade cuttings, and share the joy of gardening.</p>
        </div>

        <div className={styles.card}>
          <h3>Our Purpose</h3>
          <p>To take the mystery out of plant care. No more "black thumbs"—only green hearts and thriving jungles.</p>
        </div>
      </div>
        </div>
    
    
        </section> 
    </div>
    )
}