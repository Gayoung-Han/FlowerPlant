import gardenImage from '../assets/vangoghmuseum-s0459S1996-800.jpg'
import styles from './DefaultPage.module.css';

export default function DefaultPage(){
    return(
        <main className={styles.mainContainer}>
            <div className={styles.introSection}>
                <div className={styles.introImg}> 
                    <img src={gardenImage}/>
                </div>
                <div className={styles.introText}> 
                   <h1>
                    Welcome to Flower Plant
                   </h1>
                   <p>
                    Join our green sanctuary where plant lovers gather. 
                    From reviving your first succulent to sharing the secrets of rare tropical leaves, 
                    we grow together as a community.
                   </p>
                </div>
            </div>

             <div className={styles.gallerySection}>
                <h3>Spill the dirt! See what other plant parents are doing.</h3>

            </div>
        </main>
        
     
    )
}