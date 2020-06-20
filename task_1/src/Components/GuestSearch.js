import React, { Component } from 'react'
import '../Styles/GuestSearch.css'

class GuestSearch extends Component{


    render = () => {

        const { handleChange, query } = this.props;				

        return(
            <div className='guest-search-container'>
               
                {/* TODO: move strings to constants */}
                <input placeholder='Введіть імя гостя для пошуку' onChange={handleChange} value={query}></input>
            </div>

           
        );
    }
}

export default GuestSearch;

