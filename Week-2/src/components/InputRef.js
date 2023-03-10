import React, { Component } from "react";

class InputRef extends Component{
    constructor(props){
        super(props)
        this.InputRef = React.createRef()
    }
    focusInput(){
        this.InputRef.current.focus();
        console.log(this.InputRef);
    }
    render()
    {
        return(
            <div>
                <input type="text" ref = {this.InputRef}/>
            </div>
        )
    }
}
export default InputRef;