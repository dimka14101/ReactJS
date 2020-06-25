import React, { Component } from 'react'
import Row from './Row'
import '../../Styles/Table.css'

class Table extends Component {

    constructor (props) {
        super(props);
        this.state = {
            tableMock: props.data
        }
    }

    render = () => {
        console.log('[Table] -> Created container');
        const { tableMock } = this.state;

        return (
            <>
                <table>
                    {
                        tableMock.map( (row) => (
                            <Row 
                                row={ row }
                                key={ row.key }
                            />
                        )
                        )
                    }
                </table>
            </>
        )
    }
}

export default Table;