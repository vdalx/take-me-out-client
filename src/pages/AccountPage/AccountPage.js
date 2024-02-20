import './AccountPage.scss';
import AccountProfileCard from '../../components/AccountProfileCard';
import EventCardSmall from '../../components/EventCardSmall';

const AccountPage = () => {
    return (
        <div className='account-page'>
            <AccountProfileCard />
            <EventCardSmall />
        </div>
    )
}

export default AccountPage;