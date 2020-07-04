import React, { Component } from 'react'
import '../../Styles/InvitationView/Button.css'

class Button extends Component{
   
    render = () => {
        const { index, changer, text, theme} = this.props;
       	
        return(
            <>
                <button   
                    onClick = { changer( index ) }
                    className = { theme }
                > 
                    { text } 
                </button>
            </>
        );
    }
}

export default Button;

