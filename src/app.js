import React, {Component} from 'react'

import Table from './table'

class App extends Component {
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
        const {characters} = this.state;

        return <div className="App">
            <Table characters={characters} removeCharacter={this.removeCharacter}/>
        </div>;
    };
}

export default App;