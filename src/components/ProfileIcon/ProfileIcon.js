import './ProfileIcon.scss';
import UserAvatar from '../../assets/icons/user-solid.svg';

const ProfileIcon = () => {
    return (
        <div className='profile-icon__container'>
            <div className='profile-icon__img-container'>
                <img className='profile-icon__img' src={UserAvatar} alt='View of current user'/>
            </div>
            <p className='profile-icon__text'>profile</p>
        </div>
    )
}

export default ProfileIcon;