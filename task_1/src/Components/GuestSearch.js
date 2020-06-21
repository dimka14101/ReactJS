import React, { Component } from 'react'
import * as cnst from '../Constants/UIConstants'
import '../Styles/GuestSearch.css'

class GuestSearch extends Component{

    render = () => {
        const { handleChange, query, resultCount } = this.props;				

        return(
            <>
                <div className='guest-search-container'>
                    <input 
                        placeholder = { cnst.GUEST_PLACEHOLDER } 
                        onChange = { handleChange } 
                        value = { query } 
                    />
                </div>
                <p 
                    className='result-amount'>
                    { cnst.GUEST_FOUND }
                    <b>
                        {resultCount}
                    </b>
                </p>
            </> 
        );
    }
}

export default GuestSearch;

