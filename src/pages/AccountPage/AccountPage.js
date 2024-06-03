import './AccountPage.scss';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils';
import { getToken } from '../../tokenUtils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import ProfileCard from '../../components/ProfileCard';
import EventListContainer from '../../components/EventListContainer';
import VenueListContainer from '../../components/VenueListContainer';
import LoadingSpinner from '../../components/LoadingSpinner';

const AccountPage = () => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [profileData, setProfileData] = useState('');
    const [existingUser, setExistingUser] = useState(false)

    useEffect(() => {
        axiosInstance.get('/users/profile', getToken())
            .then(result => {
                if (!result.data.firstName || !result.data.lastName) {
                    setProfileData(result.data);
                    const path = query.get('/account') || '/account/settings';
                    navigate(path)
                } else {
                    setProfileData(result.data);
                    setExistingUser(true);
                }
            })
            .catch(err => {
            if (err.response.status === 401) {
                navigate('/login');
            }
        });
    },[navigate, query]);

    return (
        <div className='account-page'>
            <div className='account-page__container'>
                <AccountMenu />
                {existingUser
                ?
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
                :
                <LoadingSpinner />
                }
            </div>
        </div>
    )
}

export default AccountPage;