import React, {Component} from 'react';

import TableHead from './table/tableHead';
import TableBody from './table/tableBody';

class Table extends Component {
    state = {
        characters: [{
            name: 'Patel',
            job: 'Man U Manager',
        },
            {
                name: 'Mac',
                job: 'Bouncer',
            }]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })

    };


    render() {
        const { characters, removeCharacter } = this.state;
        return (
            <table>
                <TableHead/>
                <TableBody characters={characters} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table