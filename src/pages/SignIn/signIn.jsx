import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'
import styles from './signIn.module.css'
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setUpUser } from '../../redux/slices/userSlice';
import { useNoAuth } from '../../hooks/useNoAuth';

const signInSchema = Yup.object().shape({
email: Yup.string().email('Некорректный email').required('Required'),
password: Yup.string().required('Required'),
});

export const SignIn = () => {

const {token} = useNoAuth()

const dispatch = useDispatch()

const navigate = useNavigate()


const initialValues = {
  email: '',
  password: '',
}

const {mutateAsync} = useMutation({
mutationFn: async (values) => {
const res = await fetch('https://api.react-learning.ru/signin', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(values)
}) 
  return res
}})

const onSubmit = async (values) => {

const res = await mutateAsync(values)
const responce = await res.json()

  if (res.ok) {
dispatch(setUpUser({token: responce.token, ...responce.data}))

  return navigate('/products')
  } 
  return alert(responce.message)
  }

return (
 <div className={styles.wrapper1} >
<h1>Войти</h1>
<Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={signInSchema}
>
<Form className={styles.wrapper} >
<label htmlFor="email">Email</label>
<Field id="email" name="email" placeholder="jane@acme.com" type="email"/>
<label htmlFor="password">Password</label>
<Field id="password" name="password" placeholder="password" type='text' />
<button className="btn btn-success mt-1" type="submit">Войти</button>
<p><Link to={'/signup'}>Регистрация</Link></p>
</Form>
</Formik>
</div>
 
)
}
