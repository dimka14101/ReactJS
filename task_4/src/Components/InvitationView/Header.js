import React, { Component } from 'react'
import * as cnst from '../../Constants/UIConstants'
import '../../Styles/InvitationView/Header.css'
import headerImage from '../../images/search-header.JPG'

class Header extends Component{
    render = () => {
        return(
            <div className='header-container'>
                <img src={headerImage} alt={ cnst.CANT_LOAD_IMG } className="image"></img>
            </div>
        );
    }
}

export default Header;

