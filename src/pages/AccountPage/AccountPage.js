import './AccountPage.scss';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import ProfileCard from '../../components/ProfileCard';
import EventListContainer from '../../components/EventListContainer';
import VenueListContainer from '../../components/VenueListContainer';

const AccountPage = () => {
    return (
        <div className='account-page'>
            <div className='account-page__container'>
                <AccountMenu />
                <div className='account-page__content'>
                    <ProfileCard />
                    <EventListContainer eventListTitle='Upcoming Events'/>
                    <EventListContainer eventListTitle='Saved Events'/>
                    <VenueListContainer venueListTitle='Favourite Venues' />
                </div>
            </div>
        </div>
    )
}

export default AccountPage;