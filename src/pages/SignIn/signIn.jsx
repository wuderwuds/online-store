import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import styles from './signIn.module.css'
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setUpUser } from '../../redux/slices/userSlice';
import { FormRegAuth } from '../../components/Forms/formRegAuth';
import { useNoAuth } from '../../hooks/useNoAuth';
import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const SignIn = () => {

    const signInSchema = Yup.object().shape({
        email: Yup.string()
                  .email('Некорректный email')
                  .required('Введите email'),
        password: Yup.string()
                     .required('Введите пароль')
        });
    
    const {token} = useNoAuth();

    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
    const initialValues = {
        email: '',
        password: '',
        };

    const {mutateAsync} = useMutation({
        mutationFn: async (values) => {
            const res = await fetch('https://api.react-learning.ru/signin', {
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
        const res = await mutateAsync(values);
        console.log(res);
        const responce = await res.json();
        console.log(responce);
        if (res.ok) {
            toast.success('Вы успешно авторизировались', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                })
            dispatch(setUpUser({token: responce.token, ...responce.data}));

            return navigate('/products');
        }; 
        
        return toast.warn(responce.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
    };

    return (
        <>
        {!token && 
        <div className={styles.wrapper}>
            <h1>Войти</h1>
            <FormRegAuth
            typeForm={'auth'} 
            validationSchema={signInSchema} 
            onSubmit={onSubmit}
            initialValues={initialValues}
            />
        </div>
        }
        </>
    )
}
