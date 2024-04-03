import * as Yup from 'yup';
import {  useNavigate } from 'react-router-dom'
import styles from './signUp.module.css'
import { useMutation } from '@tanstack/react-query';
import { FormRegAuth } from '../../components/Forms/formRegAuth';
import { useNoAuth } from '../../hooks/useNoAuth';


export const SignUp = () => {
    
    const {token} = useNoAuth()
    
    const navigate = useNavigate();
    
    const signInSchema = Yup.object().shape({
        email: Yup.string()
                  .email('Некорректный email')
                  .required('Введите email'),
        password: Yup.string()
                     .matches(RegExp("(.*[a-z].*)"), "")
                     .matches(RegExp("(.*[A-Z].*)"), "Как минимум одна заглавная буква")
                     .matches(RegExp("(.*\\d.*)"), "Как минимум одна цифра")
                     .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), "Как минимум один спец. символ")
                     .min(6, 'длина пароля не менее 6')
                     .max(20, 'длина пароля не более 20')              
                     .required('Введите пароль'),
        group: Yup.string()
                  .oneOf(["group-11"], 'Введите group-11')
                  .required('Обязательно к запалнению')
    });
  
    const initialValues = {
        email: '',
        password: '',
        group: '',
    };

    const {mutateAsync} = useMutation({
        mutationFn: async (values) => {
            const res = await fetch('https://api.react-learning.ru/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }) 
        
        return res;
        }
    });

    const onSubmit = async (values) => {
        const res = await mutateAsync(values)
        const responce = await res.json()
        if (res.ok) {
            return navigate('/signin')
        } alert(responce.message)
    }

    return (
        <>
        {!token &&
        <div className={styles.wrapper}>
            <h1>Sign Up</h1>
                <FormRegAuth
                typeForm={'reg'} 
                validationSchema={signInSchema} 
                onSubmit={onSubmit}
                initialValues={initialValues}
            />
        </div>
        }
        </>
    )
}
