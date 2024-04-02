import { NavLink, useNavigate } from 'react-router-dom'
import styles from './cardUser.module.css'
import { useDispatch } from 'react-redux'
import { cleanUser } from '../../redux/slices/userSlice'
export const CardUser = ({cardUser}) =>{
   const dispatch = useDispatch()
   const navigate = useNavigate()

   return(
    
    <div className={styles.st}>
        <div className={`card ${styles.wrapper}`}>
            <div className="modal-header">
                <p className="modal-title p-2">Информация о пользователе</p>
                <button onClick={()=>navigate(-1)} type="button"  className="btn-close p-2"></button>
            </div>
            <img src={`${cardUser.avatar}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" data-name_info> {cardUser.name}</h5>
                <h5 className="card-title"> {cardUser.about}  </h5>
                <h5 className="card-title">{cardUser.email} </h5>
                <p className="card-text">  {cardUser.group}
                </p>
                <button 
                onClick={()=>navigate(-1)}
                type="button"  
                className="btn btn-warning"> Закрыть
                </button>
                <NavLink to='/'> 
                    <button 
                    onClick={()=>dispatch(cleanUser())}
                    type="button"  
                    className="m-2 btn btn-warning"> Выйти
                    </button> 
                </NavLink>
            </div>
        </div> 
    </div>
 )
}