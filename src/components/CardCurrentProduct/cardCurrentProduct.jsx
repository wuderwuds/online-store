import { useNavigate } from 'react-router-dom'
import styles from './cardCurentProduct.module.css'

export const CardCurrentProduct = ({prod, refetch}) =>{

    const navigate = useNavigate();
    const exitCard = () => {
        navigate(-1);
        refetch();
    };

    return(
        <div  className={styles.st}>
            <div className={`card ${styles.wrapper}`}>
                <div className="modal-header">
                    <p className="modal-title p-2">Информация о товаре</p>
                    <button onClick={exitCard} type="button"  className="btn-close p-2"></button>
                </div>
                <img src={`${prod.pictures}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title" data-name_info> {prod.name}</h5>
                    <h5 className={`"card-title" ${prod.discount ? styles.discont : ''}`}   >стоимость: {prod.price}р.  </h5>
                    <h5 className={`"card-title" ${prod.discount ? '' : styles.lioff}`} >скидка: {prod.discount}%  </h5>
                    <h5 className={`"card-title" ${prod.discount ? '' : styles.lioff}`}>цена со скидкой: {prod.price*(1-prod.discount/100)}р.</h5>
                    <h5 className="card-title">вес: {prod.wight} </h5>
                    <p className="card-text"> описание: {prod.description}</p>
                    <button 
                    onClick={exitCard}
                    type="button"  
                    className="btn btn-warning">Закрыть
                    </button>
                </div>
            </div> 
        </div>
    )
}