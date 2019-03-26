import React, {Component} from 'react';

class TableBody extends Component {
    render() {
        const rows = this.props.characters.map((character, index) => {
            return (
                <tr key={index}>
                    <td>{character.name}</td>
                    <td>{character.job}</td>
                    <td>
                        <button onClick={()=>this.props.removeCharacter(index)}>Delete</button>
                    </td>
                </tr>
            )
        });

        return <tbody>
        {rows}
        </tbody>;
    }
};

export default TableBody;