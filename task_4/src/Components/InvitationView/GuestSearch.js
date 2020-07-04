import React, { Component } from 'react'
import { ThemeContext } from '../../Helpers/ContextHelper';
import * as cnst from '../../Constants/UIConstants'
import '../../Styles/InvitationView/GuestSearch.css'

class GuestSearch extends Component {

    render = () => {
        const { handleChange, query, resultCount } = this.props;

        return (
            <ThemeContext.Consumer>
                {theme => (
                    <>
                        <div
                            className={`guest-search-container ${theme.themeMode}`}
                        >
                            <input
                                placeholder={cnst.GUEST_PLACEHOLDER}
                                onChange={handleChange}
                                value={query}
                            />
                        </div>
                        <p
                            className='result-amount'>
                            {cnst.GUEST_FOUND}
                            <b>
                                {resultCount}
                            </b>
                        </p>
                    </>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default GuestSearch;

