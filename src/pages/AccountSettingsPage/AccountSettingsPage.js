import './AccountSettingsPage.scss';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils';
import { getToken } from '../../tokenUtils';
import { useNavigate } from 'react-router-dom';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import AccountSettingsForm from '../../components/AccountSettingsForm';
 
const AccountSettingsPage = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState('');

    useEffect(() => {
        axiosInstance.get('/users/profile', getToken())
            .then(result => {
            setProfileData(result.data);
            })
            .catch(err => {
            if (err.response.status === 401) {
                navigate('/login');
            }
        });
    },[navigate]);

    return (
        <div className='account-settings-page'>
            <div className='account-settings-page__container'>
                <AccountMenu />
                <div className='account-settings-page__content'>
                    <AccountSettingsForm profileData={profileData}/>
                </div>
            </div>
        </div>
    )
}

export default AccountSettingsPage;