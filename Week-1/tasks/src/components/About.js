import React from 'react'
import Person from './Person'

function About() {
    const persons = [
        {
            id: 1,
            name: 'Darshak',
            age: 20,
            skill: 'MERN Stack'
        },
        {
            id: 2,
            name: 'Akshay',
            age: 21,
            skill: 'Designing'
        }
    ]
    const personList = persons.map(person => <Person person={person}/>)
  return (
    <div>
        <h1>----------------------------------------------This is About Us Page----------------------------------------------</h1>
        {personList}
    </div>
  )
}

export default About