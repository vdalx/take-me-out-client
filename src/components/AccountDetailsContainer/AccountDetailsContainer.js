import './AccountDetailsContainer.scss';
import ProfileCard from '../ProfileCard';
import EventListContainer from '../EventListContainer';
import VenueListContainer from '../VenueListContainer';
import UserIcon from '../../assets/icons/user-solid.svg';
import SettingsIcon from '../../assets/icons/gear-solid.svg';

const AccountDetailsContainer = () => {
    return (
        <div className='account-details'>
            <div className='account-details__container'>
                <div className='account-details__menu'>
                    <div className='account-details__menu-tab account-details__menu-tab--account account-details__menu-tab--active'>
                        <div className='account-details__account-tab-container'>
                            <img className='account-details__tab-icon account-details__tab-icon--active' src={UserIcon} alt='An icon indicating a user profile'/>
                            <h3 className='account-details__account-tab-text'>
                                account
                            </h3>
                        </div>
                    </div>
                    <div className='account-details__menu-tab account-details__menu-tab--settings'>
                        <div className='account-details__settings-tab-container'>
                            <img className='account-details__tab-icon' src={SettingsIcon} alt='An icon indicating a user profile'/>
                            <h3 className='account-details__settings-tab-text'>
                                settings
                            </h3>
                        </div>
                    </div>
                </div>
                <ProfileCard />
                <EventListContainer eventListTitle='Upcoming Events'/>
                <EventListContainer eventListTitle='Saved Events'/>
                <VenueListContainer venueListTitle='Favourite Venues' />
            </div>
        </div>
    )
}

export default AccountDetailsContainer;