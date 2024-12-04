import { Link } from 'react-router-dom'
import styles from './footer.module.css'


export const Footer = () => {

    return(
        <footer>
            <div className={styles.footer__container}>
                <div className={styles.footer__group}>
                    <h3>Позвонить нам:</h3>
                    <div className={styles.footer__links}>
                        <li>+7 (495) 999-99-99</li>
                    </div>
                </div>
    
                <div className={styles.footer__group}>
                    <div className={styles.footer__links}>
                        <li> Акции</li>
                        <li> Новости</li>
                        <li> Отзывы</li>
                    </div>
                </div>
    
                <div className={styles.footer__group}>
                    <div className={styles.footer__links}>
                        <li ><Link to='http://google.com'>Контакты</Link> </li>
                        <li >Вакансии</li>
                        <li >СМИ</li>
                    </div>
                 </div>
            </div>
            <div className={styles.footer__copyright}> DogFood © 2024 </div>
        </footer>
    )
}