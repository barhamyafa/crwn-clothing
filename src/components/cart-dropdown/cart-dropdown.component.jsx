import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';

import './cart-dropdown.styles.scss';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { cartItemsSelector } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history}) => {
    return (
        <div className='cart-dropdown'>
            {cartItems && cartItems.length ?
                <div className='cart-items' >
                    {
                        cartItems.map((cartItem) =>
                            <CartItem {...cartItem} key={cartItem.id} />
                        )
                    }
                </div>
                :
                <div className='empty-message'> cart is empty</div>
            }
            <CustomButton onClick={()=> history.push('/checkout')}>sign to checkout</CustomButton>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
})
export default withRouter(connect(mapStateToProps)(CartDropdown));