import styles from './header.module.css'
import header_logo from '../../pictures/header_logo.jpg'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Search } from '../../components/Search/search'

export const Header = () => {
    const cart = useSelector(state=>state.cart);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {token} = useSelector(state=>state.user);
    let cartFullCount = 0;
    cart.forEach(e => cartFullCount += e.count);

    return (
    
        <header className={styles.header}> 
            <img 
            onClick={()=>navigate('/')} 
            className={styles.header_logo} 
            src={header_logo}     
            alt='logo'
            />
            {pathname=== '/products' && <Search/>}
            <div className={styles.headerMenu}>
                <i className="fa-regular fa-heart fa-lg m-1" ></i>
                <Link className={`fa-solid fa-bag-shopping fa-lg m-3 ${styles.headerLink}` } to='/cart'/>
                <p className={styles.p}>{!!cartFullCount && cartFullCount}</p>
                <li className={ token ? '' : styles.lioff}> 
                    <NavLink 
                    className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
                    to='products'> Витрина 
                    </NavLink> 
                </li>
                <li className={ token ? '' : styles.lioff}> 
                    <NavLink
                    className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
                    to='/userinfo'>
                        <i className="fa-solid fa-user"></i>
                    </NavLink>
                 </li>
        
                <li className={token ? styles.lioff : ''}> 
                    <NavLink
                    className={({ isActive }) => isActive ? styles.header_b : styles.header_a}
                    to='/signin'> Sign in
                    </NavLink>
                </li>
            </div>         
        </header>
    )
}