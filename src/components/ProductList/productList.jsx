import { AllProductItem } from '../AllProductItem/allProductItem'
import style from './productList.module.css'

export const ProductList = ({pets}) => {
     
    return (
        <div className={style.wrapper}>
            {pets.map((pet) => {
                return ( <AllProductItem key = {pet._id} pet={pet} /> )
            })}
        </div>
    )
}