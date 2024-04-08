import { useDispatch, useSelector } from 'react-redux'
import styles from './cart.module.css'
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../hooks/useAuth';
import { decrementCart, deleteFromCart, incrementCart } from '../../redux/slices/cartSlace';
export const Cart = () => {
    
    const cart = useSelector(state=>state.cart);
    const {token} = useAuth()
    const dispatch = useDispatch()
        
    const {data} = useQuery({
        queryKey: ['getCartProducts', cart],
        queryFn: async () => {
            const res = await Promise.allSettled(cart.map(product=> fetch(`https://api.react-learning.ru/products/${product._id}`, {
                method: 'GET',
                headers: {
                Authorization: 'Bearer ' + token
                }
            }).then(res=>res.json()).then(data=> {
                return {
                    _id: product._id,
                    data
                }})))
        
         return res.filter(el=> {
            if (el.value.data?.err?.statusCode === 404) {
                dispatch(deleteFromCart(el.value._id))
            }
            
            return el.statusCode !== 'rejected' && !el.value.data.err
            }).map(el=>el.value.data)        
        },
        initialData: []
        
    })

  console.log(data);


    return (
        <>
        <h1>Корзина</h1>
        {data && data.map(el =>
        <div key={el._id} className={`card mb-3 ${styles.wrapper}`}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={el.pictures} className={styles.sizeImg} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{el.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <button onClick={()=>dispatch(deleteFromCart(el._id))}>del</button>
  <button onClick={()=>dispatch(incrementCart(el._id))}>+</button>
  <button onClick={()=>dispatch(decrementCart(el._id))}>-</button>
</div>
)}
        </>
    )
}