import './AccountMenu.scss';
import { Link, useLocation } from 'react-router-dom';
import UserIcon from '../../assets/icons/user-solid.svg';
import SettingsIcon from '../../assets/icons/gear-solid.svg';

const AccountMenu = () => {

    const location = useLocation();

    const accountPageLinks = {
        account: '/account',
        settings: '/account/settings'
    }

    return (
        <div className='account-menu'>
            <div className='account-menu__menu'>
                <div className={`account-menu__menu-tab account-menu__menu-tab--account ${location.pathname === accountPageLinks.account ? 'account-menu__menu-tab--active' : ''}`}>
                    <Link to={accountPageLinks.account} className='account-menu__item-link'>
                        <div className='account-menu__account-tab-container'>
                            <img 
                                className={`account-menu__tab-icon ${location.pathname === accountPageLinks.account ? 'account-menu__tab-icon--active' : ''}`}
                                src={UserIcon}
                                alt='An icon indicating a user profile'/>
                            <h3 className='account-menu__account-tab-text'>
                                account
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className={`account-menu__menu-tab account-menu__menu-tab--settings ${location.pathname === accountPageLinks.settings ? 'account-menu__menu-tab--active' : ''}`}>
                    <Link to={accountPageLinks.settings} className='account-menu__item-link'>
                        <div className='account-menu__settings-tab-container'>
                            <img 
                                className={`account-menu__tab-icon ${location.pathname === accountPageLinks.settings ? 'account-menu__tab-icon--active' : ''}`}
                                src={SettingsIcon}
                                alt='An icon indicating a user profile'/>
                            <h3 className='account-menu__settings-tab-text'>
                                settings
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;