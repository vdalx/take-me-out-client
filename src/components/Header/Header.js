import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__title-wrap'>
                    <Link to='/' >
                        <h1 className='header__title'>take me 
                            <span className='header__title--bold'> out</span>
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;