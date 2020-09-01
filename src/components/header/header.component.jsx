import React from 'react';

import {ReactComponent as Logo} from '../../assests/crown.svg'
import './header.styles.scss'
import {Link} from 'react-router-dom';

const Header = ()=> {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    shop
                </Link>
                <Link className='option' to='/shop'>
                    contact
                </Link>
                <Link className='option' to='/shop'>
                    log in
                </Link>
            </div>
        </div>
    )
}

export default Header;