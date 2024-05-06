import './HeaderNavigation.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ProfileIcon from '../ProfileIcon';

const HeaderNavigation = () => {

    const menuItems = [
        {
            id: '1',
            title: 'Home',
            url: '/home',
            cName: 'links',
            cFlag: 'home'
        },
        {
            id: '2',
            title: 'Events',
            url: '/events',
            cName: 'links',
            cFlag: 'events'
        },
        {
            id: '3',
            title: 'Profile',
            url: '/account',
            cName: 'links',
            cFlag: 'profile'
        },
    ]

    const [menuIconClicked, setMenuIconClicked] = useState(false);

    const handleClick = () => {
        setMenuIconClicked(!menuIconClicked)
    }

    return (
        <nav className='header-nav'>
            <Link to='/' className='header-nav__logo'>
                <h1 className='header-nav__title'>take me 
                    <span className='header-nav__title--bold'> out</span>
                </h1>
            </Link>
            <div className='header-nav__menu-icon' onClick={handleClick}>
                {menuIconClicked ?
                    <FontAwesomeIcon icon={faXmark} /> :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
            <ul className={`${menuIconClicked ?
                    'header-nav__menu header-nav__menu--active' : 
                    'header-nav__menu'
                }`}
            >
                {menuItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className={`header-nav__${item.cName} header-nav__${item.cName}--${item.cFlag}`}
                        >
                            <NavLink to={item.url} className={`header-nav__${item.cName}-url`}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })
                }
            </ul>
            <div className='header-nav__profile-icon'>
                <ProfileIcon />
            </div>
        </nav>
    )
}

export default HeaderNavigation;