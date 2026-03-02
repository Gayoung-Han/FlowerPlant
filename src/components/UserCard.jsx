import styles from './UserCard.module.css'
import { Link } from "react-router-dom";

export default function PlantCard({ plant, deleteUserCard}) {

    const lowerLevel = plant.level?.toLowerCase();

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <h3 className={styles.commonName}>{plant.commonName}</h3>
                <p className={styles.scientificName}>{plant.scientificName}</p>                
            </div>

            <div className={styles.cardInfo}>
                <div className={styles.infoItem}>
                    <span className={styles.label}>☀️ Light</span>
                    <span className={styles.value}>{plant.light}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>💧 Water</span>
                    <span className={styles.value}>{plant.water}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.label}>🪴 Soil</span>
                    <span className={styles.value}>{plant.soil}</span>
                </div>
            </div>

            <div className={styles.cardBottom}>
                <p className={styles.levelText}>
                    This plant is suitable for <span className={styles[lowerLevel]}>{lowerLevel}</span>
                </p>
            </div>
            <div className="btnBox">
                <Link className={styles.editBtn} to={`/EditPage/${plant.id}`}>Update</Link>
                <button className={styles.deleteBtn} onClick={() => deleteUserCard(plant.id)} >Delete</button>
            </div>            
        </div>
    );
}