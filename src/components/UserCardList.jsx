import UserCard from "./UserCard";
import UserCardForm from "./UserCardForm";
import { useOutletContext } from "react-router-dom";
import { useEffect } from 'react';
import styles from './UserCardList.module.css'

export default function UserCardList (){

    const { plants, setPlants } = useOutletContext();

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

    return(
        <div className={styles.container}>
        {
             plants.map(plant=>(
                <UserCard
                key = {plant.id}
                plant = {plant}
                deleteUserCard={() => deleteUserCard(plant.id)}
                />
            ))
        }
        </div>
        

    )
}