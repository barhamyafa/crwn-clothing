import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            {cartItems && cartItems.length ?
                <div>
                    <div className='cart-items' >
                        {
                            cartItems.map((cartItem) =>
                                <CartItem {...cartItem} key={cartItem.id} />
                            )
                        }
                    </div>
                    <CustomButton>sign to checkout</CustomButton>
                </div>
                :
                <div> cart is empty</div>
            }
        </div>
    )
}

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems
})
export default connect(mapStateToProps)(CartDropdown);