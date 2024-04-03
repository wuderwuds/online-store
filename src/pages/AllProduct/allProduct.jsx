import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { setUpQuantity } from "../../redux/slices/quantitySlice";
import { ProductList } from "../../components/ProductList/productList";

export const Products = () => {
    const dispatch = useDispatch();
    const {token} = useAuth();
    const search = useSelector(state=>state.filter.search);

    const {data: pets, isError, error, isLoading} = useQuery({
        queryKey: ['getProducts', search],
        queryFn: async () => {
            try {
                const res = await fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
                    headers: {
                    Authorization: 'Bearer ' + token
                    }
                }); 
                const responce = await res.json();
                if (res.status===200) {
                    dispatch(setUpQuantity(responce.length))
                    return responce;
                }
 
            return alert(responce.message)
            } catch (error) {
                return alert(error)
            }
        }
    })
    
    if (isError) return <p>Произошла ошибка: {error}</p>
    
    if (isLoading) return <p>Загрузка...</p>
    
    return (
        <>
            {token && <ProductList pets={pets} />}
        </>
    )

}