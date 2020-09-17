import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
    cartItemsCount: cartItemsCountSelector(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);