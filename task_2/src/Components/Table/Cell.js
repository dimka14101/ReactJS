import React, { Component } from 'react'
import '../../Styles/Table.css'

class Cell extends Component {

    constructor (props) {
        super(props);
        this.state = {
            tableCell: props.cell,
            tableCellKey: props.cell.key
        }
    }

    composeComment = (tableCell) => {
        const { FreeText } = tableCell;

        if (FreeText.Type==="Number") {
            return <td className="right">{ FreeText.Value }</td>;
        } else if (FreeText.Type==="Date") {
            return <td><i>{ FreeText.Value }</i></td>;
        } else if (FreeText.Type==="Сurrency") {
            let currency;

            if (FreeText.Badge) {
                currency = FreeText.Value + FreeText.Badge;
            } else {
                currency = FreeText.Value;
                console.warn("[Table] Missed currency type in ", tableCell);
            }
            
            return  <td className="right">{currency}</td>
        } else {
            return <td>{ FreeText.Value }</td>;
        }
    }

    composeCell = (tableCell) => {
        if (tableCell.head) {
            return <>
                <th>{ tableCell.UserID }</th>
                <th>{ tableCell.UserName }</th>
                <th>{ tableCell.Count }</th>
                <th>{ tableCell.FreeText }</th>
            </>;
        }
        let commentBox = this.composeComment(tableCell);
        return <>
            <td>{ tableCell.UserID }</td>
            <td>{ tableCell.UserName }</td>
            <td>{ tableCell.Count }</td>
            <>
                {
                commentBox
                }
            </>
        </>
    }

    render = () => {
        const { tableCell } = this.state;

        let cellContainer = this.composeCell(tableCell);

        return (
            <>
            {
                cellContainer
            }
            </>
        )
    }
}

export default Cell;