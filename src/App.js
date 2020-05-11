import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';


class App extends React.Component {
  // I'm using the shortened version of the state syntax, for more info read React notes.
  state = {
    monsters: [],
    searchField: ''
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters = {filteredMonsters} />         
      </div>
    )
  }
}

export default App;
