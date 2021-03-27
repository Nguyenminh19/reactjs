import React from 'react'

import Person from './Person/Person'

const persons = (props) => props.persons.map((person,personIndex) =>{
        return  <Person 
        name={person.name}
        age={person.id}
        click={()=>props.click(personIndex)}
        key={person.name}
        change={(event)=>props.change(event, person.id)}/>
    })

export default persons