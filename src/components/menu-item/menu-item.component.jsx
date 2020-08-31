import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom'
const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
    <div className={`menu-item ${size ? size: ''}`} onClick={()=> history.push(linkUrl)} >
        <div className="background-image"
         style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);