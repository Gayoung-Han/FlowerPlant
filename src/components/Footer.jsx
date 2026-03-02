import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <h3 className={styles.logo}>Flower Plant 🌿</h3>
        </div>

        <div className={styles.contactSection}>
             <p className={styles.address}>
            <strong>Address:</strong> 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark
          </p>
          <p className={styles.contactItem}>
            <strong>Email:</strong> 
            <a href="mailto:flowplant123@flowerplant2026.dk">flowerplant123@flowerplant2026.dk</a>
          </p>
          <p className={styles.contactItem}>
            <strong>Mobile:</strong> 
            <a href="tel:+452076765">+45 20 76 765</a>
          </p>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} Flower Plant. All rights reserved.</p>
      </div>
    </footer>
  );
}