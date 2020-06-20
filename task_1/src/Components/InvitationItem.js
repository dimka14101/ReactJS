import React, { Component } from 'react'
import '../Styles/InvitationItem.css'

class InvitationItem extends Component{


    render = () => {
        const { user, changer } = this.props;				
        const { arrived, guest } = user;	

        return(
            <div
                className="guest-item-container"
            >
                {/* TODO: move strings to constants */}
                    Гість 
                    <b> { guest.name } </b> 
                    працює в компанії
                    <b> "{ guest.company.toUpperCase() }" </b>
                <br/>               
                    Його контакти:
                <br/>
                    <b> { guest.phone } </b>
                <br/>
                    <b> { guest.address } </b>
                
                {/* TODO: mb create new component for button */}
                <div> 
                    <button 
                        onClick={changer( guest.index )}
                        className={'status-button ' + (arrived ? "arrive" : "absent")}
                    > 
                        { arrived ? "Прибув" : "Не прибув"} 
                    </button>
                </div>
            </div>

           
        );
    }
}

export default InvitationItem;

