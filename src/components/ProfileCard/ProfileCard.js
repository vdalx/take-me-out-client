import './ProfileCard.scss';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils';
import { getToken } from '../../tokenUtils';
import { useNavigate, Link } from 'react-router-dom';
import UserImg from '../../assets/images/user-photo-1633332755192-727a05c4013d.webp';
import UserIcon from '../../assets/icons/user-solid.svg';
import LocationIcon from '../../assets/icons/location-dot-solid.svg';

const ProfileCard = () => {

    const navigate = useNavigate();
    const [profileData, setProfileData] = useState('');

    useEffect(() => {
        axiosInstance.get('/users/profile', getToken())
            .then(result => {
            setProfileData(result.data);
            })
            .catch(err => {
            if (err.response.status === 401) {
                navigate('/login');
            }
        });
    },[navigate]);

    console.log(profileData)

    return (
        <div className='profile-card'>
            <div className='profile-card__container'>
                <div className='profile-card__img-container'>
                    <img className='profile-card__img' src={UserImg} alt='Shows the user associated with the account'/>
                </div>
                <div className='profile-card__details-container'>
                    <div className='profile-card__user-name-container'>
                        <img className='profile-card__user-icon' src={UserIcon} alt='An icon indicating a user profile'/>
                        <h3 className='profile-card__user-name'>
                            daniel smith
                        </h3>
                    </div>
                    <div className='profile-card__user-location-container'>
                        <img className='profile-card__location-icon' src={LocationIcon} alt='An icon indicating a location'/>
                        <h3 className='profile-card__location-name'>
                            Toronto, ON
                        </h3>
                    </div>
                    <div className='profile-card__edit-profile-prompt'>
                        <p className='profile-card__edit-profile-link'>
                            edit profile
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;