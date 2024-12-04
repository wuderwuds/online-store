import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../hooks/useAuth"
import { CardCurrentProduct } from "../../components/CardCurrentProduct/cardCurrentProduct"

export const PageProduct = () => {

    const {token} = useAuth();

    const {idOfProd} = useParams();

    const {data: prod, isError, error, isLoading, refetch} = useQuery({
        queryKey: ['getCurrentProd', idOfProd ],
        queryFn: async () => {

            try {       

                const res = await fetch(`https://api.react-learning.ru/products/${idOfProd}`, {
                    headers: {
                    Authorization: 'Bearer ' + token
                    }
                }); 
                const responce = await res.json();
                if (res.status===200) {
                    return responce;
                }
                 return alert(responce.message);
  
            } catch (error) {
  
                return alert(error);
            }
        }
    })
   
  if (isError) return <p>Произошла ошибка: {error}</p>;

  if (isLoading) return <p>Загрузка...</p>;

    return <CardCurrentProduct prod={prod} refetch={refetch}/>  
}