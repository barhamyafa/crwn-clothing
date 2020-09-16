import React from 'react';
import { connect } from 'react-redux';

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assests/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils.js'

const Header = ({ currentUser, hidden }) => {
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
                    <div className='option' onClick={() => auth.signOut()}>
                        sign out
                    </div>
                    :
                    <Link className='option' to='/signIn'>
                        sign in
                    </Link>
                }
                <CartIcon />
            </div>
            {hidden ?
                null
                :
                <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);