import './SignUpForm.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SubmitButton from '../SubmitButton';
import PrimaryButton from '../PrimaryButton';
import ErrorIcon from '../../assets/icons/error-24px.svg';
import axiosInstance from '../../utils';

const SignUpForm = () => {

    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        termsConditions: false,
    };

    const [values, setValues] = useState(initialValues);
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'termsConditions') {
            setValues((prev) => {
                return {
                    ...prev,
                    [name]: checked,
                };
            });
        } else {
            setValues((prev) => {
                return {
                    ...prev,
                    [name]: value,
                };
            });
        }
        console.log(values)
    };

    const isEmailValid = (email) => {
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        return emailRegex.test(email);
    }

    const isPasswordValid = (password) => {
        // Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
    }

    const isConfirmPasswordValid = (password, confirmPassword) => {
        return password === confirmPassword;
    }

    const isFormValid = () => {
        // Email Validation
        if(!values.email || !isEmailValid(values.email)) {
            setEmailErr('Please provide a valid email')
            return
        }

        // Password Validation
        if(!values.password || !isPasswordValid(values.password)) {
            setPasswordErr('Please provide a valid password')
            return
        }

        if(!values.confirmPassword || !isPasswordValid(values.confirmPassword)) {
            setConfirmPasswordErr('Please provide a valid password')
            return
        }

        if(!isConfirmPasswordValid(values.password, values.confirmPassword)) {
            setConfirmPasswordErr('Passwords do not match')
            return
        }
        return true;
    }

    const resetForm = () => {
        setValues(initialValues);
        setEmailErr('');
        setPasswordErr('');
        setConfirmPasswordErr('');
        setErrMessage('');
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            axiosInstance.post('/users/signup', {
                username: values.email,
                password: values.password,
            }).then(result => {
                navigate('/login')
            }).catch(err => {
                console.log(err);
                setErrMessage('Failed to sign up');
            })
        } else {
            setErrMessage('Failed to sign up');
        }
    }

    return (
        <div className='signup-form'>
            <div className='signup-form__container'>
                <div className='signup-form__title-container'>
                    <h2 className='signup-form__title'>
                        Sign Up
                    </h2>
                </div>
                <form
                    className='signup-form__form'
                    id='user-signup-form'
                    onSubmit={onSubmit}
                >
                    <label className='signup-form__label' htmlFor='email'></label>
                    <input
                        className='signup-form__input' 
                        type='text'
                        name='email'
                        placeholder='Email'
                        id='email'
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {emailErr && (
                        <div className='signup-form__err'>
                            <img className='signup-form__err-icon' src={ErrorIcon} alt='Error icon'/>
                            {emailErr}
                        </div>
                    )}
                    <label className='signup-form__label' htmlFor='password'></label>
                    <input
                        className='signup-form__input'
                        type='password'
                        name='password'
                        placeholder='Password'
                        id='password'
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    {passwordErr && (
                        <div className='signup-form__err'>
                            <img className='signup-form__err-icon' src={ErrorIcon} alt='Error icon'/>
                            {passwordErr}
                        </div>
                    )}
                    <label className='signup-form__label' htmlFor='confirmPassword'></label>
                    <input
                        className='signup-form__input'
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm password'
                        id='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {confirmPasswordErr && (
                        <div className='signup-form__err'>
                            <img className='signup-form__err-icon' src={ErrorIcon} alt='Error icon'/>
                            {confirmPasswordErr}
                        </div>
                    )}
                    {errMessage && (
                        <div className='signup-form__err signup-form__err--final' >
                            {errMessage}
                        </div>
                    )}
                    <div className='signup-form__terms-checkbox'>
                        <input
                            className='signup-form__terms-checkbox-input'
                            type='checkbox'
                            id='terms-conditions'
                            name='termsConditions'
                            checked={values.termsConditions}
                            onChange={handleInputChange}
                        />
                        <label 
                            className='signup-form__terms-checkbox-label'
                            htmlFor='terms-conditions'>
                                Accept all Terms & Conditions
                        </label>
                    </div>     
                </form>
                <div className='signup-form__btn-container'>
                    <SubmitButton 
                        className='signup-form__btn signup-form__btn--submit'
                        formName='user-signup-form' 
                        btnText='submit' 
                        btnValue='submit'
                    />
                    <PrimaryButton
                        className='signup-form__btn signup-form__btn--reset'
                        btnType='button'
                        btnText='reset'
                        handleOnClick={resetForm}
                    />
                </div>
                <div className='signup-form__login-prompt'>
                    <p className='signup-form__login-prompt-text'>
                        Already have an account?
                        <Link to='/login'>
                            <span className='signup-form__login-prompt-link'>
                                Login
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;