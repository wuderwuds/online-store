import styles from './home.module.css'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../hooks/useAuth'

export const Home =() => {
    
    const {token} = useAuth();
    
    const {data: len, isError, error, isLoading} = useQuery({
        queryKey: ['getHome'],
        queryFn: async () => {
            try {
                const res = await fetch('https://api.react-learning.ru/products', {
                    headers: {
                    Authorization: 'Bearer ' + token
                    }
                }); 
            const responce = await res.json();
            if (res.status===200) {
                return responce.total;
            }
        
            alert(responce.message)
            } catch (error) {
                alert(error);
            }
        }
    });
        
    if (isError) return <p>Произошла ошибка: {error}</p>;
        
    if (isLoading) return <p>Загрузка...</p>;

    let as = ''
    if (len===1) {
        as = 'ия'
    }
    else if (1<len && len<5) {
        as = 'ии'
    }
    else {as = 'ий'}
    
        return  (
            <div className={styles.wrapper} > 
                <h1>Добро пожаловать в интренет магазин продуктов для животных! <br></br><p className={token ? '' : styles.lioff}>На данный момент в асортименте {len} позиц{as}.</p>
                </h1>
            </div>
        )
}