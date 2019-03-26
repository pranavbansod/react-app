import React, {Component} from 'react';

import TableHead from './table/tableHead';
import TableBody from './table/tableBody';

class Table extends Component {
    render() {
        const { characters, removeCharacter } = this.props;
        return (
            <table>
                <TableHead/>
                <TableBody characters={characters} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table