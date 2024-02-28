import './AccountPage.scss';
import AccountProfileCard from '../../components/AccountProfileCard';
import EventListContainer from '../../components/EventListContainer';
import VenueListContainer from '../../components/VenueListContainer';

const AccountPage = () => {
    return (
        <div className='account-page'>
            <AccountProfileCard />
            <EventListContainer eventListTitle='Upcoming Events'/>
            <EventListContainer eventListTitle='Saved Events'/>
            <VenueListContainer venueListTitle='Favourite Venues' />
        </div>
    )
}

export default AccountPage;