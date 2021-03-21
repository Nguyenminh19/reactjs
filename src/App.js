import React, { Component}  from 'react';
import './App.css';

import Person from './Person/Person'

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

  // style = {
  //   backgroundColor: "green",
  //   color: "white",
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'blue'
  //   }
  // }

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

    let person = null

    if(this.state.showPerson === true){
      // person = (
      //   <div>
      //     {this.state.persons.map((person,personIndex) => {
      //       return <Person 
      //           click={()=>this.deletePersonsHandler(personIndex)}
      //           name={person.name} 
      //           age={person.age}/>
      //     })}
      //   </div>
        
      //   )
      person = (
      <div>
        {this.state.persons.map((person,personIndex) =>{
          return <Person 
          name={person.name}
          age={person.id}
          click={()=>this.deletePersonsHandler(personIndex)}
          key={person.name}
          change={(event)=>this.nameChangedHandler(event, person.id)}
          />
        })}
      </div>
      )

      // console.log(this.style.backgroundColor)
    //  this.style[':hover'] = {
    //       backgroundColor: 'lightred',
    //       color: 'black'
    //     }

    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button alt={this.props} onClick={this.toggerPersonsHandler}>
          Switch Name
        </button>
        {person}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
