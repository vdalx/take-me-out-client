import './AccountDetailsContainer.scss';
import ProfileCard from '../ProfileCard';
import EventListContainer from '../EventListContainer';
import VenueListContainer from '../VenueListContainer';
import UserIcon from '../../assets/icons/user-solid.svg';


const AccountDetailsContainer = () => {
    return (
        <div className='account-details'>
            <div className='account-details__profile'>
                <div className='account-details__menu'>
                    <div className='account-details__menu-account-tab'>
                        <div className='account-details__account-tab-container'>
                            <img className='account-details__account-tab-icon' src={UserIcon} alt='An icon indicating a user profile'/>
                            <h3 className='account-details__account-tab-text'>
                                account
                            </h3>
                        </div>
                    </div>
                    <div className='account-details__menu-settings-tab'>
                        <div className='account-details__settings-tab-container'>
                            <img className='account-details__settings-tab-icon' src={UserIcon} alt='An icon indicating a user profile'/>
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