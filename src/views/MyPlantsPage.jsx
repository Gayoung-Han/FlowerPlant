import UserCardForm from '../components/UserCardForm'
import UserCardList from '../components/UserCardList'
import styles from './MyPlantsPage.module.css'

export default function MyPlantsPage(){
    return(
        <div className={styles.container}>
        <UserCardForm/>
        <UserCardList/>
        </div>
    )
}