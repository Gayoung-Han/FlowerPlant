import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

export default function Header() {
    return (
        <header className={styles.header}> 
             <div className={styles.logo}>
                <Link to="/">Flower Plant 🌿</Link>
             </div>
             <nav className={styles.nav}> 
                <Link to="/" className={styles.navLink}>Home</Link> 
                <Link to="/About" className={styles.navLink}>About</Link>
                <Link to="/MyPlants" className={styles.navLink}>My Plants</Link>
            </nav>
        </header>
    )
}