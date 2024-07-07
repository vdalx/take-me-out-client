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
    const [existingUser, setExistingUser] = useState(false);
    const [savedEventsData, setSavedEventsData] = useState('');
    const [confirmedEventsData, setConfirmedEventsData] = useState('');


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
                    // Only make the second API call if the first one is successful and conditions are met
                    return axiosInstance.get('/users/profile/saved-events', getToken());
                }
            })
            .then(eventsResult => {
                if (eventsResult) {
                    setSavedEventsData(eventsResult.data.filter((status) => status.user_event_status === "saved"))
                    setConfirmedEventsData(eventsResult.data.filter((status) => status.user_event_status === "confirmed"))
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
                        userImage={''}
                        userCity={profileData.location}
                    />
                    <EventListContainer 
                        eventListTitle='Upcoming Events'
                        events={confirmedEventsData}
                        type={'confirmed'}
                    />
                    <EventListContainer 
                        eventListTitle='Saved Events'
                        events={savedEventsData}
                        type='saved'
                    />
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