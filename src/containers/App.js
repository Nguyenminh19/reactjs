import React, { Component}  from 'react';
import  './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { id:'adad', name: newName, age: 28 },
        { id:'dasaf', name: 'Manu', age: 29 },
        { id:'akdnsjan', name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( {persons: persons} )
  }

  toggerPersonsHandler = () => {
    const doseShow = this.state.showPerson;
    this.setState({showPerson: !doseShow});
  }

  deletePersonsHandler = (personIndex) => {
    const persons = this.state.persons
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  render () {

    let persons = null

    if(this.state.showPerson){    
      persons = (
          <Persons
            persons={this.state.persons}
            click={this.deletePersonsHandler}
            change={this.nameChangedHandler}/>
      )
    }

    return (
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPerson}
          persons={this.state.persons}
          click={this.toggerPersonsHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
