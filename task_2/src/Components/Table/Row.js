import React, { Component } from 'react'
import Cell from './Cell'
import '../../Styles/Table.css'

class Row extends Component {

    constructor (props) {
        super(props);
        this.state = {
            tableRow: props.row,
            tableRowKey: props.row.key
        }
    }

    composeRow = (tableRow, cell) => {
        if (tableRow.head) {
            return <thead>{cell}</thead>;
        } 
        return <tbody>{cell}</tbody>;
    }

    render = () => {
        const { tableRow, tableRowKey } = this.state;

        let cell = <tr>
                        <Cell 
                            cell={ tableRow }
                            key={ tableRowKey }
                        />
                    </tr>;

        let cellWrapper = this.composeRow(tableRow, cell);

        return (
            <>
                { cellWrapper }
            </>
        )
    }
}

export default Row;