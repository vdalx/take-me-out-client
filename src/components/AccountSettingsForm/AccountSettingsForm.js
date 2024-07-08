import './AccountSettingsForm.scss';
import { toast } from 'react-toastify';
import axiosInstance from '../../utils';
import { getToken } from '../../tokenUtils';
import { useState, useEffect } from 'react';
import userIcon from '../../assets/icons/user-solid.svg';
import warningIcon from "../../assets/icons/error-24px.svg";
import SubmitButton from '../SubmitButton';

const AccountSettingsForm = ({ profileData }) => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        avatar: ''
    });

    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        if (profileData) {
            setValues({
                firstName: profileData.firstName || '',
                lastName: profileData.lastName || '',
                email: profileData.email || '',
                phoneNumber: profileData.phone_number || '',
                location: profileData.location || '',
                avatar: profileData.avatar || ''
            });
        }
    }, [profileData]);

    // Need to add Phone number regex

    const isPhoneNumberValid = (phoneNumber) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Example regex for international phone numbers
        return phoneRegex.test(phoneNumber);
    };

    const isEmailValid = (email) => {
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        return emailRegex.test(email);
    };

    const isFormValid = () => {
        if(!values.firstName || !values.lastName || !values.email || !values.location) {
            setErrMessage('Please provide all required fields');
            return false;
        } else if (values.email && !isEmailValid(values.email)) {
            setErrMessage('Please provide a valid email address')
            return false;
        } else if (values.phoneNumber && !isPhoneNumberValid(values.phoneNumber)) {
            setErrMessage('Please provide a valid phone number');
            return false;
        }
        setErrMessage('');
        return true;
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
            axiosInstance.put('/users/profile', {
                id: profileData.userId,
                username: profileData.username,
                email: values.email,
                first_name: values.firstName,
                last_name: values.lastName,
                phone_number: values.phone_number,
                location_city: values.location
            }, getToken()).then(response => {
                console.log(response.data)
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
                                placeholder={'First Name'}
                                type='text'
                                value={values.firstName || ""}
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
                                placeholder={'Last Name'}
                                type='text'
                                value={values.lastName || ""}
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
                                placeholder={'Email'}
                                type='text'
                                value={values.email || ""}
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
                                placeholder={'Phone Number'}
                                type='text'
                                value={values.phoneNumber || ""}
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
                                placeholder={'Location'}
                                type='text'
                                value={values.location || ""}
                                onChange={handleInputChange}>
                            </input>
                        </div>
                    </form>
                </div>
                <div className='account-settings__avatar-update'>
                    <div className='account-settings__avatar'>
                        <img className={`account-settings__avatar-image account-settings__avatar-image--${values.avatar ? 'user' : 'default'}`} src={values.avatar? values.avatar : userIcon} alt='Default user profile avatar'/>
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
                        <div className='account-settings__submit-btn-container'>
                            <SubmitButton 
                                className='account-settings__btn account-settings__btn--submit'
                                formName='account-settings-form' 
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