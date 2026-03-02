import gardenImage from '../assets/vangoghmuseum-s0459S1996-800.jpg'
import styles from './DefaultPage.module.css';
import ExampleCard from '../components/ExampleCard';

export default function DefaultPage(){

    const examplePlants = [
    {
        id: 1,
        commonName: "Snake Plant", 
        scientificName: "Dracaena trifasciata", 
        light: "Low to bright indirect light", 
        water: "Every 2-3 weeks (Drought tolerant)", 
        soil: "Well draining cactus or succulent mix", 
        level: "beginner"
    },
    {
        id: 2,
        commonName: "Fiddle Leaf Fig", 
        scientificName: "Ficus lyrata", 
        light: "Consistent bright indirect light", 
        water: "Once a week when top soil is dry", 
        soil: "Rich, well draining peaty mix", 
        level: "intermediate"
    },
    {
        id: 3,
        commonName: "Calathea Orbifolia", 
        scientificName: "Goeppertia orbifolia", 
        light: "Medium indirect light (Sensitive to sun)", 
        water: "Keep soil consistently moist (Not soggy)", 
        soil: "Moisture retaining but airy mix", 
        level: "expert"
    },
    {
    id: 4,
    commonName: "Alocasia Polly", 
    scientificName: "Alocasia × amazonica", 
    light: "Bright indirect light (Avoid direct rays)", 
    water: "High humidity needed; keep soil moist but avoid root rot", 
    soil: "Loose, well-draining organic potting mix", 
    level: "expert"
}
];

    return(
        <main className={styles.mainContainer}>
            <div className={styles.introSection}>
                <div className={styles.introImg}> 
                    <img src={gardenImage}/>
                </div>
                <div className={styles.introText}> 
                   <h1>
                    Welcome to <span>Flower Plant</span>
                   </h1>
                   <p>
                    Join our green sanctuary where plant lovers gather. 
                    From reviving your first succulent to sharing the secrets of rare tropical leaves, 
                    we grow together as a community.
                   </p>
                </div>
            </div>

             <div className={styles.gallerySection}>
                <h3>See what other plant parents have shared.</h3>
                <div className={styles.galleryItems}>
                    {
                     examplePlants.map(example => (
                        <ExampleCard
                            key={example.id}
                            example={example}
                        /> 
                    ))
                }
                </div>

            </div>
        </main>
        
     
    )
}