import './ProfileCard.scss';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import UserImg from '../../assets/images/user-photo-1633332755192-727a05c4013d.webp';
import UserIcon from '../../assets/icons/user-solid.svg';
import LocationIcon from '../../assets/icons/location-dot-solid.svg';
import PrimaryButton from '../PrimaryButton';
import LogoutIcon from '../../assets/icons/logout-icon.svg';
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
        const path = query.get('/login') || '/account';
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
                <div className='profile-card__edit-profile-prompt'>
                    <Link to={pageLinks.settings} className='profile-card__edit-btn-link'>
                        <PrimaryButton
                            className='profile-card__btn profile-card__btn--profile-edit'
                            btnType='button'
                            btnText='edit profile'
                        />
                    </Link>
                    <Link to={pageLinks.logout} className='profile-card__logout-link' onClick={handleLogout}>
                        <div className='profile-card__logout-container'>
                                <img className='profile-card__item-icon' src={LogoutIcon} alt='Logout icon'/>
                                <p className='profile-card__item-title'>
                                    Logout
                                </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;