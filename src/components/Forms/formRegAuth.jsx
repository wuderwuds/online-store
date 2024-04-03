import styles from './formRegOuth.module.css' 
import { Link} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const FormRegAuth = ({validationSchema, onSubmit, initialValues, typeForm}) => {
    const funForm  = (typeForm) => {
        if(typeForm === 'auth') {
            return (
            <Form className={styles.wrapper} >
                
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="jane@acme.com" type="email"/>
                <ErrorMessage component={'p'} name='email'/>
                
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" placeholder="password" type='text' />
                <ErrorMessage component={'p'} name='password'/>
                
                <button className="btn btn-success mt-1" type="submit">Войти</button>
                <Link to={'/signup'}>Регистрация</Link>
            </Form>
            )
        }; 
        if (typeForm === 'reg') {
            return (
            <Form className={styles.wrapper} >
                
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="jane@acme.com" type="email"/>
                <ErrorMessage component={'p'} name='email'/>
                
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" placeholder="password" type='text'/>
                <ErrorMessage component={'p'} name='password'/>
                
                <label htmlFor="group">Группа </label>
                <Field id="group" name="group" placeholder="group-11" type='text'/>
                <ErrorMessage component={'p'} name='group'/>
                
                <button className="btn btn-success mt-1" type="submit">Зарегистрироваться</button>
            
            </Form>
            )
        };

    };
    
    return (        
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {funForm(typeForm)}
        </Formik>
    )
}