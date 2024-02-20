import './LoginForm.scss';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setToken } from '../../tokenUtils';
import { Link } from 'react-router-dom';
import SubmitButton from '../SubmitButton';
import PrimaryButton from '../PrimaryButton';
import ErrorIcon from '../../assets/icons/error-24px.svg';
import axiosInstance from '../../utils';

const LoginForm = () => {
     //const location = useLocation();
     const navigate = useNavigate();
     const [query] = useSearchParams();
 
     const initialValues = {
         email: '',
         password: '',
     };
 
     const [values, setValues] = useState(initialValues);
     const [emailErr, setEmailErr] = useState('');
     const [passwordErr, setPasswordErr] = useState('');
     const [errMessage, setErrMessage] = useState('');
 
     const handleInputChange = (e) => {
         const { name, value } = e.target;
         setValues((prev) => {
             return {
                 ...prev,
                 [name]: value,
             };
         });
     };
 
     const isEmailValid = () => {
         const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         return emailRegex.test(values.email);
     }
 
     const isPasswordValid = () => {
         // Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character
         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         return passwordRegex.test(values.password);
     }
 
     const isFormValid = () => {
         // Email Validation
         if(values.email.length === 0 || !isEmailValid()) {
             setEmailErr('Please provide a valid email')
             return
         }
 
         //Password Validation
         if(values.password.length === 0 || !isPasswordValid()) {
             setPasswordErr('Please provide a valid password')
             return
         }
         return true;
     }
 
     const resetForm = () => {
         setValues(initialValues);
         setEmailErr('');
         setPasswordErr('');
         setErrMessage('');
     }
     
     const onSubmit = (e) => {
         e.preventDefault();
         if(isFormValid()) {
             axiosInstance.post('/users/login', {
                 username: values.email, 
                 password: values.password
             }).then(result => {
                 setToken(result.data);
                 const path = query.get('/login') || '/profile';
                 navigate(path)
             }).catch(err => {
                 console.log(err);
             })
         } else {
             setErrMessage('Failed to log in');
         }
     }
     
    return (
        <div className='login-form'>
            <div className='login-form__container'>
                <div className='login-form__title-container'>
                    <h2 className='login-form__title'>
                        Log in
                    </h2>
                </div>
                <form
                    className='login-form__form'
                    id='user-login-form'
                    onSubmit={onSubmit}
                >
                    <label className='login-form__label' htmlFor='email'></label>
                    <input
                        className='login-form__input'  
                        type='text'
                        placeholder='Email'
                        name='email'
                        id='email'
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {emailErr && (
                        <div className='login-form__err'>
                            <img className='login-form__err-icon' src={ErrorIcon} alt='Error icon'/>
                            {emailErr}
                        </div>
                    )}
                    <label className='login-form__label' htmlFor='password'></label>
                    <input
                        className='login-form__input'
                        type='password'
                        placeholder='Password'
                        name='password'
                        id='password'
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    {passwordErr && (
                        <div className='login-form__err'>
                            <img className='login-form__err-icon' src={ErrorIcon} alt='Error icon'/>
                            {passwordErr}
                        </div>
                    )}
                    {errMessage && (
                        <div className='login-form__err login-form__err--final' >
                            {errMessage}
                        </div>
                    )}          
                </form>
                <div className='login-form__btn-container'>
                    <SubmitButton 
                        className='login-form__btn login-form__btn--submit'
                        formName='user-login-form' 
                        btnText='submit' 
                        btnValue='submit'
                    />
                    <PrimaryButton
                        className='login-form__btn login-form__btn--reset'
                        btnType='button'
                        btnText='reset'
                        handleOnClick={resetForm}
                    />
                </div>
                <div className='login-form__register-prompt'>
                    <p className='login-form__register-prompt-text'>
                        Don&apos;t have an account? 
                        <Link to='/create-account'>
                            <span className='login-form__register-prompt-link'>
                                Register
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;