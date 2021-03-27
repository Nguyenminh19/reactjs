import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClass = []

    let btnClass = ''

    if (props.showPersons) {
        btnClass = classes.red
    }
    console.log(props.persons)
    if(props.persons.length <= 2){
        assignedClass.push(classes.red)
    }
    if(props.persons.length <= 1){
        assignedClass.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.click}>Toggle Name</button>
        </div>
    )
}

export default cockpit