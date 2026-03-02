import { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import styles from './EditPage.module.css';

export default function EditPage() {
  const { id } = useParams();
  const { plants, setPlants } = useOutletContext();
    let navigate = useNavigate();

  // Find the specific event that the user wants to update
  const plant = plants.find(plant => plant.id === Number(id)); // Find the event in question
 
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [light, setLight] = useState("");
  const [water, setWater] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("beginner");


  // Save events to webstorage/local storage
  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  // Update event title, date and description when 
  // specific event is found. This will affect the
  // values in the form. 
  useEffect(() => {
    if (plant) {
      setCommonName(plant.commonName);
      setScientificName(plant.scientificName);
      setLight(plant.light);
      setWater(plant.water);
      setSoil(plant.soil);
      setLevel(plant.level);
    }
  }, [plant]);

  
  // When the user presses form update button, the specific event
  // is updated.
  function updateHandler(e) {
    e.preventDefault();
    const updatedPlant = { 
        id: Number(id), 
        commonName: commonName,
        scientificName: scientificName,
        light: light,
        water: water,
        soil: soil,
        level: level
        
     };
    setPlants(plants.map((plant) =>
      plant.id === Number(id) ? updatedPlant : plant
    )
  );

    // After update, the user is redirected to the default page.
    navigate("/MyPlants");
  }

  return (
     <>
        <title>Edit Page</title>
        <form className={styles.createForm} onSubmit={updateHandler}>
              <h3 className={styles.formTitle}>You can edit here.</h3>
              
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
        
              <button className={styles.submitBtn} type="submit">Share my Plant</button>
            </form>
        </>
  );
};

