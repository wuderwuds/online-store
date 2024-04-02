import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {  useNavigate } from 'react-router-dom'
import styles from './signUp.module.css'
import { useMutation } from '@tanstack/react-query';

const signInSchema = Yup.object().shape({
  email: Yup.string()
            .email('Некорректный email')
            .required('Required'),
  password: Yup.string()
               .required('Required'),
});

export const SignUp = () => {
const navigate = useNavigate()

const initialValues = {
  email: '',
  password: '',
  group: '',
}

const {mutateAsync} = useMutation({
  mutationFn: async (values) => {
  const res = await fetch('https://api.react-learning.ru/signup', {
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
console.log(responce);   
if (res.ok) {
      return navigate('/signin')
} alert(responce.message)
}

return (

<div className={styles.wrapper1}>
<h1>Sign Up</h1>
<Formik
initialValues={initialValues}
onSubmit={onSubmit}
validationSchema={signInSchema}
>
<Form className={styles.wrapper}>
<label htmlFor="email">Email</label>
<Field
id="email"
name="email"
placeholder="jane@acme.com"
type="email"
/>
<label htmlFor="password">Password</label>
<Field id="password" name="password" placeholder="password" type='password' />
<label htmlFor="passgroupword">Группа </label>
<Field id="group" name="group" placeholder="group-11" type='text'/>
<button className="btn btn-success mt-1" type="submit">Зарегистрироваться</button>
</Form>
</Formik>
</div>
)
}
