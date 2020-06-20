import React, { Component } from 'react'
import '../Styles/Header.css'
import headerImage from '../images/search-header.JPG'

class Header extends Component{


    render = () => {


        return(
            <div className='header-container'>
               
                {/* TODO: move strings to constants */}
                <img src={headerImage} alt="Зображення тимчасово недоступне" className="image"></img>
            </div>

           
        );
    }
}

export default Header;

