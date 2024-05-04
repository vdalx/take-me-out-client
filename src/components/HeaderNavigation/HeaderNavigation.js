import './HeaderNavigation.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProfileIcon from '../ProfileIcon';

const HeaderNavigation = () => {

    const pageLinks = {
        events: '/events',
        posts: '/home',
        profile: '/account'
    }

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className='header-nav'>
            <div className='header-nav__title-wrap'>
                <Link to='/' >
                    <h1 className='header-nav__title'>take me 
                        <span className='header-nav__title--bold'> out</span>
                    </h1>
                </Link>
            </div>
            <div className='header-nav__menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span className='header-nav__line'></span>
                <span className='header-nav__line'></span>
                <span className='header-nav__line'></span>
            </div>
            <ul className={`header-nav__links ${menuOpen ? 'header-nav__links--open' : ''}`}>
                <li className='header-nav__item'>
                    <NavLink to={pageLinks.posts}>Home</NavLink>
                </li>
                <li className='header-nav__item'>
                    <NavLink to={pageLinks.events}>Events</NavLink>
                </li>
                <li className='header-nav__item header-nav__item--profile'>
                    <NavLink to={pageLinks.profile}>Profile</NavLink>
                </li>
            </ul>
            <div className='header-nav__profile-icon'>
                <ProfileIcon />
            </div>
        </nav>
    )
}

export default HeaderNavigation;