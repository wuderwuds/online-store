import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useDebounce } from "../../hooks/useDebounce"
import { useDispatch } from "react-redux"
import { changeSearchValue } from "../../redux/slices/filterSlice"
import styles from './search.module.css'

export const Search = () => {
    const navigate = useNavigate();
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [searchValue, setSearchValue] = useState(() => {
    const firstSearch = searchParams.get('search');

    return firstSearch ? firstSearch : '';
    });
 
    const dispatch = useDispatch();
    
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        dispatch(changeSearchValue(debounceValue))
    }, [debounceValue, dispatch]);


    const handleChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        if (value) {
            return setSearchParams((prev) => {
            prev.set('search', value);
            navigate('/products');
            return prev;
            })
        }

        return setSearchParams((prev) => {
            prev.delete('search');
            return prev;
        })
  };

  return  <input 
          className={styles.search} 
          value={searchValue} 
          onChange={(event)=>handleChange(event)} 
          placeholder="Поиск" 
          />   
}
