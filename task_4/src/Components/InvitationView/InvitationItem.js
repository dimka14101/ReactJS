import React, { Component } from 'react'

import { ThemeContext } from '../../Helpers/ContextHelper';
import * as cnst from '../../Constants/UIConstants'
import Button from './Button'
import '../../Styles/InvitationView/InvitationItem.css'


class InvitationItem extends Component {

    render = () => {
        const { user, changer } = this.props;
        const { arrived, guest } = user;

        return (
            <ThemeContext.Consumer>
                {
                    theme => (
                        <>
                            <div
                                className={`guest-item-container ${theme.themeMode}`}
                            >
                                {cnst.GUEST_TEXT}
                                <b> {guest.name} </b>
                                {cnst.GUEST_WORKS_AT}
                                <b> "{guest.company.toUpperCase()}" </b>
                                <br />
                                {cnst.GUEST_CONTACTS}
                                <br />
                                <b> {guest.phone} </b>
                                <br />
                                <b> {guest.address} </b>

                                <Button
                                    index={user.guest._id}
                                    changer={changer}
                                    text={arrived ? cnst.ARRIVE_TEXT : cnst.ABSENT_TEXT}
                                    theme={'status-button ' + (arrived ? "arrive" : "absent")}
                                />
                            </div>
                        </>
                    )}
            </ThemeContext.Consumer>

        );
    }
}

export default InvitationItem;

