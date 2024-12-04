
import { useNavigate } from 'react-router-dom'
import styles from './allProductItem.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlace';
export const AllProductItem = ({pet}) => {
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleAddInCart = (event) => {
        event.stopPropagation();
        dispatch(addToCart(pet._id))
    }
 
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
            <button onClick={(event)=>handleAddInCart(event)}> in cart</button>
        </div>
    )
}