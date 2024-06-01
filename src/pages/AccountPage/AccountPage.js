import './AccountPage.scss';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils';
import { getToken } from '../../tokenUtils';
import { useNavigate } from 'react-router-dom';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import ProfileCard from '../../components/ProfileCard';
import EventListContainer from '../../components/EventListContainer';
import VenueListContainer from '../../components/VenueListContainer';

const AccountPage = () => {
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
        <div className='account-page'>
            <div className='account-page__container'>
                <AccountMenu />
                <div className='account-page__content'>
                    <ProfileCard
                        firstName={profileData.firstName}
                        lastName={profileData.lastName}
                        userLocation={profileData.location}
                    />
                    <EventListContainer eventListTitle='Upcoming Events'/>
                    <EventListContainer eventListTitle='Saved Events'/>
                    <VenueListContainer venueListTitle='Favourite Venues' />
                </div>
            </div>
        </div>
    )
}

export default AccountPage;