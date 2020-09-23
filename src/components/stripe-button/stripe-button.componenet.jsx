import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HTsTYBYPabCsuEum1hbD2LmBFKNNTsBlyZTMmvznVnfxMpqMHH0KrnUBWmvpunPQUbqhLIGIb8aZ4mZlJOybaEV00eEXrW2db'

    const onToken = (token) => {
        console.log('token is : ', token);
        alert("payment succesfull")
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='crwn clothing ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is: $${price}`}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        amount={priceForStripe}
        />
    )
}

export default StripeCheckoutButton;
