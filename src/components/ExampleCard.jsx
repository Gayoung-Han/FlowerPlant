import { Link } from "react-router-dom";
import styles from "./ExampleCard.module.css";

export default function ExampleCard({ example }) {

    const lowerLevel = example.level?.toLowerCase();

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <h3 className={styles.commonName}>{example.commonName}</h3>
                <p className={styles.scientificName}>{example.scientificName}</p>                
            </div>

            <div className={styles.cardInfo}>
                <div className={styles.infoItem}>
                    <span className={styles.label}>☀️ Light</span>
                    <span className={styles.value}>{example.light}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>💧 Water</span>
                    <span className={styles.value}>{example.water}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>🪴 Soil</span>
                    <span className={styles.value}>{example.soil}</span>
                </div>
            </div>

            <div className={styles.cardBottom}>
                <p className={styles.levelText}>
                    This plant is suitable for <span className={styles[lowerLevel]}>{lowerLevel}</span>
                </p>
            </div>
        </div>
    );
}