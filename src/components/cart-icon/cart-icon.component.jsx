import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';


import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { cartItemsCountSelector } from '../../redux/cart/cart.selectors'

debugger

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItemsCount: cartItemsCountSelector
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);