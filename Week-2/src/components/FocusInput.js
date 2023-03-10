import React, { Component } from "react";
import InputRef from "./InputRef";
class FocusInput extends Component{
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }
    clickhandler = () =>{
        this.componentRef.current.focusInput()
    }
    render(){
        return(
            <div>
                <InputRef ref={this.componentRef}/>
                <button className="b2" onClick={this.clickhandler}>Focus Input</button>
            </div>
        )
    }
}
export default FocusInput;