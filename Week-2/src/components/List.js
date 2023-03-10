import React from 'react'
import Title from './Title';
function List(){
    const data1 = [
        {
            id:1,
            title:"Adani",
            description:"Adani is increase more and more !"
        },
        {
            id:2,
            title:"Tesla",
            description:"Elon Mask ownes company!"
        },
        {
            id:3,
            title:"Money",
            description:"Money money money"
        }
    ]
    const datalist = data1.map(data2 => (
    <Title data2 = {data2}></Title> ))
    return <div>{datalist}</div>
}

export default List;