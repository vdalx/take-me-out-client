import './Header.scss';
import { Link } from 'react-router-dom';
import ProfileIcon from '../ProfileIcon';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header_title-wrap'>
                    <h1 className='header__title'>take me 
                        <span className='header__title--bold'> out</span>
                    </h1>
                </div>
                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        <li className='header__nav-list-item'>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <span className='header__nav-list-item-text'>
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className='header__nav-list-item'>
                            <Link to='/events' style={{ textDecoration: 'none' }}>
                                <span className='header__nav-list-item-text'>
                                    Events
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='header__profiile-icon'>
                    <ProfileIcon />
                </div>
            </div>
        </div>
    )
}

export default Header;