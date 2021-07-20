import React, { useState } from 'react';

const Person = (props) => {
    const { firstName, lastName, age, hairColor } = props

    const [ birthday, setBirthday ] = useState(age)
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {birthday}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ (event) => setBirthday(birthday + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default Person;