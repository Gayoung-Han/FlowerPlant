import UserCard from "./UserCard";
import UserCardForm from "./UserCardForm";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';
import styles from './UserCardList.module.css'

export default function UserCardList (){

    const { plants, setPlants } = useOutletContext();
    const [filter, setFilter] = useState("all");

    //Delete Button
    function deleteUserCard(targetId){
        const isConfirmed = window.confirm("Do you want to delete the plant?");
    if (isConfirmed) {
      setPlants(plants.filter(plant => plant.id !== targetId));
    }
    }


    useEffect(() => 
        {localStorage
            .setItem("plants", 
            JSON.stringify(plants));}, 
        [plants]);

    const filteredPlants = plants.filter(plant => {
        if (filter === "all") return true;
        return plant.level === filter;  
    });


    return(
        <div className={styles.container}>
           <div className={styles.filterBtns}>
                <button onClick={() => setFilter("all")}>All Plants</button>
                <button onClick={() => setFilter("beginner")}>Beginners</button>
                <button onClick={() => setFilter("intermediate")}>Intermediates</button>
                <button onClick={() => setFilter("expert")}>Experts</button>
            </div>

            <div className={styles.cardContainer}>
                { filteredPlants.length > 0 ? (
                       filteredPlants.map(plant=>
                        <UserCard
                            key = {plant.id}
                            plant = {plant}
                            deleteUserCard={() => deleteUserCard(plant.id)}
                        />
                    
                
            )
                ) : (
                    <p>No result of plants for {filter}</p>
                )
          
        }
            </div>
        
        </div>
        

    )
}