import {createSelector} from 'reselect';


export const cartSelector = state => state.cart

export const cartItemsSelector = createSelector (
    [cartSelector],
    (cart)=>cart.cartItems
);

export const cartIconHiddenSelector = createSelector (
    [cartSelector],
    cart => cart.hidden
);

export const cartItemsCountSelector = createSelector (
    [cartItemsSelector],
    cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const cartItemsTotalSelector = createSelector (
    [cartItemsSelector],
    cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);