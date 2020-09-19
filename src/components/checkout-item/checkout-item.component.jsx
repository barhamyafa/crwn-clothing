import React from 'react';
import { connect } from 'react-redux';


import './checkout-item.styles.scss';

import {removeItem, addItem, decreaseQuantity} from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseQuantity}) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
  <div className = 'checkout-item' >
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
      <span className='arrow' onClick={()=> decreaseQuantity(cartItem)}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</span>
      </span>
      <span className='price'>{price}</span>
      <button className='remove-button' onClick={()=> removeItem(cartItem)}>&#10005;</button>
  </div >
  )
  };

  const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    decreaseQuantity: (item) => dispatch(decreaseQuantity(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);
