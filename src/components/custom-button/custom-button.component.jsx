import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, inverted, ...otherProps})=> {
    return (
        <button className={`custom-button ${inverted ? 'inverted': ''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;