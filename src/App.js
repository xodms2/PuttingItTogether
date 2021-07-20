import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from '../src/components/Person.js';

const PersonCard = (props) => {
  return (
    <div className="PersonCard">
      <Person 
        firstName={ "Jane" } 
        lastName={ "Doe" } 
        age={45} 
        hairColor={"Black"}/>
      <Person 
        firstName={ "John" } 
        lastName={ "Smith" } 
        age={88} 
        hairColor={"Brown"}/>
      <Person 
        firstName={ "Millard" } 
        lastName={ "Fillmore" } 
        age={50} 
        hairColor={"Brown"}/>
      <Person 
        firstName={ "Maria" } 
        lastName={ "Smith" } 
        age={62} 
        hairColor={"Brown"}/>
    </div>
  );
}

export default PersonCard;
