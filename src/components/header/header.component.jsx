import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assests/crown.svg'
import './header.styles.scss'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils.js'

const Header = ({currentUser})=> {
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
                {currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>
                        sign out
                    </div>
                    :
                    <Link className='option' to='/signIn'>
                        sign in
                    </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);