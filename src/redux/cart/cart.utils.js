export const addCartItem = (cartItems, cartItemToAdd) => {

    const isExistingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)
    if (isExistingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                { ...cartItem }

        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]

}

export const removeCartItem = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id)
}

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
    const isExistingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToDecrease.id)
    if (isExistingCartItem.quantity === 1) {
        return removeCartItem (cartItems, cartItemToDecrease)
    }
    if (isExistingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToDecrease.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                :
                { ...cartItem }

        )
    }
}