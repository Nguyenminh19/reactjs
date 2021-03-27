import React from 'react'
import './Person.css'

const person = (props) => {   
    return (   
        <div className="personDiv">
            <p onClick={props.click}>My name {props.name}</p>
            <p>{props.children}</p>
            <p>{props.id}</p>
            <input onChange={props.change} value={props.name}/>       
        </div>
    )
}

export default person