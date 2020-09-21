import React from 'react';
import './directory-menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { directorySectionsSelector} from '../../redux/directory/directory.selectors'

const DirectoryMenu = ({directorySections}) => {
        return(
            <div className='directory-menu'>
                {directorySections.map(({title, imageUrl, size, id, linkUrl}) =>
                    <MenuItem key={id} title={title} size={size}imageUrl={imageUrl} linkUrl={`shop/${linkUrl}`} />
                )}
            </div>
        )
}

const mapStateToProps = createStructuredSelector ({
  directorySections: directorySectionsSelector
})

export default connect(mapStateToProps)(DirectoryMenu);
