import React from "react"
import './style.css' 
function Title({data2}){
    console.log("title page is rendering")
    return (
    <div>
        My id is {data2.id} and <h2 className="title">the title is {data2.title}.</h2><h2 className="description"> {data2.description}</h2>
    </div>
    )
}
export default React.memo(Title);