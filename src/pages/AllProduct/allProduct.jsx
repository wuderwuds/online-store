import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { ProductList } from "../../components/ProductList/productList";

export const Products = () => {
    const {token} = useAuth();
    const search = useSelector(state=>state.filter.search);

    const {data: pets, isError, error, isLoading} = useQuery({
        queryKey: ['getProducts', token, search],
        queryFn: async () => {
            try {
                const res = await fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
                    headers: {
                    Authorization: 'Bearer ' + token
                    }
                }); 
                const responce = await res.json();
                if (res.status===200) {
                    return responce;
                }
 
            return alert(responce.message)
            } catch (error) {
                return alert(error)
            }
        },
    })
    
    if (isError) return <p>Произошла ошибка: {error}</p>
    
    if (isLoading) return <p>Загрузка...</p>
    
    return (
        <>
            {token && <ProductList pets={pets} />}
        </>
    )

}