
import { useNavigate } from 'react-router-dom'
import styles from './allProductItem.module.css'
export const AllProductItem = ({pet}) => {
    
    const navigate = useNavigate()
 
    return (
        <div 
        onClick={() => navigate(`/products/${pet._id}`)} 
        className={`card  ${styles.wrapper}`}
        >
            <img src={pet.pictures} className={styles.pet_pictures}  alt={pet.title}/>
            <div className={`card-body ${styles.card}`}>
                <div className={styles.pet_name}>
                    <h5 className={styles.pet_name1} >{pet.name}</h5>
                </div>
            </div>
        </div>
    )
}