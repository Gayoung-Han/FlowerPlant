import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import styles from "./UserCardForm.module.css"; 

export default function UserCardForm() {
  const { plants, setPlants } = useOutletContext();

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [light, setLight] = useState("");
  const [water, setWater] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("beginner");

  function createPlantCard(e) {
    e.preventDefault();
    const newId = crypto.randomUUID();
    const newPlant = {
      id: newId,
      commonName, scientificName, light, water, soil, level
    };
    setPlants([...plants, newPlant]);
    // reset
    setCommonName(""); setScientificName(""); setLight(""); setWater(""); setSoil("");
  }

  return (
    <form className={styles.createForm} onSubmit={createPlantCard}>
      <h3 className={styles.formTitle}>Please share your plant info</h3>
      
      <div className={styles.inputBox}>
        <label htmlFor="commonName">What's the common name?</label>
        <input 
          type="text" id="commonName" value={commonName} 
          required onChange={(e) => setCommonName(e.target.value)}
        />
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="scientificName">and the scientific name?</label>
        <input 
          type="text" id="scientificName" value={scientificName} 
          required onChange={(e) => setScientificName(e.target.value)}
        />
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="light">How much light does it need?</label>
        <input 
          type="text" id="light" value={light} 
          required onChange={(e) => setLight(e.target.value)}
        />
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="water">How much water does it need?</label>
        <input 
          type="text" id="water" value={water} 
          required onChange={(e) => setWater(e.target.value)}
        />
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="soil">What about the soil?</label>
        <input 
          type="text" id="soil" value={soil} 
          required onChange={(e) => setSoil(e.target.value)}
        />
      </div>

      <div className={styles.radioSection}>
        <p>This plant is suitable for a</p>
        <div className={styles.radioGroup}>
          <label>
            <input 
              type="radio" name="difficulty" value="beginner"
              checked={level === "beginner"}
              onChange={(e) => setLevel(e.target.value)}
              required
            /> Beginner
          </label>
          <label>
            <input 
              type="radio" name="difficulty" value="intermediate"
              checked={level === "intermediate"}
              onChange={(e) => setLevel(e.target.value)}
              required
            /> Intermediate
          </label>
          <label>
            <input 
              type="radio" name="difficulty" value="expert"
              checked={level === "expert"}
              onChange={(e) => setLevel(e.target.value)}
              required
            /> Expert
          </label>
        </div>
      </div>

      <button className={styles.submitBtn} type="submit">Create my plant's guide</button>
    </form>
  );
}