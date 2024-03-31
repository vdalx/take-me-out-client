import './AccountSettingsForm.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import userIcon from '../../assets/icons/user-solid.svg';
import warningIcon from "../../assets/icons/error-24px.svg";
import SubmitButton from '../SubmitButton';

const AccountSettingsForm = ({ user }) => {
    
    const apiUrl = process.env.REACT_APP_API_URL;
    const initialValues = {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phoneNumber: user.phone_number,
        location: user.userLocation,
        avatar: user.avatar
    };

    const [values, setValues] = useState(initialValues);
    const [errMessage, setErrMessage] = useState('');

    // Need to add Phone number regex

    const isEmailValid = (email) => {
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        return emailRegex.test(email);
    };

    const isFormValid = () => {
        if(!values.firstName || !values.lastName || !values.email || !values.location) {
            setErrMessage('Please provide all required fields');
            return
        } else if (!isEmailValid(values.email)) {
            setErrMessage('Please provide a valid email address')
            return
        }
        return true
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            axios.put(`${apiUrl}/users`, {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                school: values.schoolName
            }).then(response => {
                console.log(response.data);
                toast.success("Successfully updated profile!")
            }).catch(error => {
                toast.error("Proflile not updated!");
                console.log(`Profile update error ${error}`)
            });
        }
    }
    return (
        <div className='account-settings'>
            <div className='account-settings__title-container'>
                <h2 className='account-settings__title-text'>
                    Account Settings
                </h2>
            </div>
            <div className='account-settings__content-container'>
                <div className='account-settings__form-container'>
                    <form
                        className='account-settings__form'
                        id='account-settings-form'
                        onSubmit={handleSubmit}
                    >
                        <div className='account-settings__field-container'>
                            <label className='account-settings__form-label' htmlFor='firstName'>
                                    First Name
                            </label>
                            <input
                                className='account-settings__form-input' 
                                id='firstName'
                                name='firstName'
                                placeholder='First name'
                                type='text'
                                value={values.firstName}
                                onChange={handleInputChange}>
                            </input>
                        </div>
                        <div className='account-settings__field-container'>
                            <label className='account-settings__form-label' htmlFor='lastName'>
                                Last Name
                            </label>
                            <input
                                className='account-settings__form-input'
                                id='lastName'
                                name='lastName'
                                placeholder='Last name'
                                type='text'
                                value={values.lastName}
                                onChange={handleInputChange}>
                            </input>
                        </div>
                        <div className='account-settings__field-container'>
                            <label className='account-settings__form-label' htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='account-settings__form-input'
                                id='email'
                                name='email'
                                placeholder='Email'
                                type='text'
                                value={values.email}
                                onChange={handleInputChange}>
                            </input>
                        </div>
                        <div className='account-settings__field-container'>
                            <label className='account-settings__form-label' htmlFor='phoneNumber'>
                                Phone number
                            </label>
                            <input
                                className='account-settings__form-input'
                                id='phoneNumber'
                                name='phoneNumber'
                                placeholder='Phone number'
                                type='text'
                                value={values.phoneNumber}
                                onChange={handleInputChange}>
                            </input>
                        </div>
                        <div className='account-settings__field-container'>
                            <label className='account-settings__form-label' htmlFor='location'>
                                Location
                            </label>
                            <input
                                className='account-settings__form-input'
                                id='location'
                                name='location'
                                placeholder='Location'
                                type='text'
                                value={values.userLocation}
                                onChange={handleInputChange}>
                            </input>
                        </div>
                    </form>
                </div>
                <div className='account-settings__avatar-update'>
                    <div className='account-settings__avatar'>
                        {!values.avatar
                            ? <img className='account-settings__avatar-image account-settings__avatar-image--default' src={userIcon} alt='Default user profile avatar'/>
                            : <img className='account-settings__avatar-image' src={values.avatar} alt='User provided profile avatar'/>
                        }
                    </div>
                    <div className='account-settings__upload-container'>
                        <label className='account-settings__upload-image-label' htmlFor='avatar'>
                            Choose Image
                        </label>
                        <input
                            className='account-settings__upload-image-input'
                            id='avatar'
                            style={{visibility:"hidden"}}
                            type='file'
                            accept='image/png, image/jpeg'
                            name={values.avatar}
                        >
                        </input>
                    </div>
                </div>
                <div className='account-settings__submission-container'>
                    {errMessage && (
                        <div className='account-settings__error-container'>
                            <img className='account-settings__error-icon' src={warningIcon} alt="Error icon"/>
                            <div className='account-settings__form-error'>
                                {errMessage}
                            </div>
                        </div>
                    )}
                        <div className='account-settings__submit'>
                            <SubmitButton 
                                className='signup-form__btn signup-form__btn--submit'
                                formName='user-signup-form' 
                                btnText='submit' 
                                btnValue='submit'
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettingsForm;