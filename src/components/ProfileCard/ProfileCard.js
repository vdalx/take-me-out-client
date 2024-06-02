import './ProfileCard.scss';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import UserImg from '../../assets/images/user-photo-1633332755192-727a05c4013d.webp';
import UserIcon from '../../assets/icons/user-solid.svg';
import LocationIcon from '../../assets/icons/location-dot-solid.svg';
import EditIcon from '../../assets/icons/edit-pen-regular.svg';
import LogoutIcon from '../../assets/icons/logout-arrow-solid.svg';
import { removeToken } from '../../tokenUtils';


const ProfileCard = ({ firstName, lastName, userLocation }) => {

    const navigate = useNavigate();
    const [query] = useSearchParams();

    const pageLinks = {
        profile: '/account',
        settings: '/account/settings',
        logout: '/logout'
    }

    const handleLogout = async() => {
        await removeToken('token')
        const path = query.get('/account') || '/login';
        navigate(path)
    }

    return (
        <div className='profile-card'>
            <div className='profile-card__container'>
                <div className='profile-card__profile-details'>
                    <div className='profile-card__img-container'>
                        <img className='profile-card__img' src={UserImg} alt='Shows the user associated with the account'/>
                    </div>
                    <div className='profile-card__details-container'>
                        <div className='profile-card__user-name-container'>
                            <img className='profile-card__user-icon' src={UserIcon} alt='An icon indicating a user profile'/>
                            <h3 className='profile-card__user-name'>
                                {`${firstName} ${lastName}`}
                            </h3>
                        </div>
                        <div className='profile-card__user-location-container'>
                            <img className='profile-card__location-icon' src={LocationIcon} alt='An icon indicating a location'/>
                            <h3 className='profile-card__location-name'>
                                {userLocation}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='profile-card__edit-logout-container'>
                    <Link to={pageLinks.settings} className='profile-card__btn-link'>
                    <div className='profile-card__btn-container profile-card__btn-container--edit'>
                            <img className='profile-card__btn-icon' src={EditIcon} alt='Edit icon'/>
                            <p className='profile-card__btn-title'>
                                edit profile
                            </p>
                        </div>
                    </Link>
                    <Link to={pageLinks.logout} className='profile-card__btn-link' onClick={handleLogout}>
                        <div className='profile-card__btn-container profile-card__btn-container--logout'>
                            <img className='profile-card__btn-icon' src={LogoutIcon} alt='Logout icon'/>
                            <p className='profile-card__btn-title'>
                                logout
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;