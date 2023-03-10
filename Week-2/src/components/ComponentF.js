import React from "react";
import { Component } from "react";
import { UserConsumer } from "./UserContext";
class ComponentF extends Component {
    render() {
        return(
            <div className="p3">
            <UserConsumer>
            {username => {
                return <h3>Context Consumer calls {username}</h3>
            }}
            </UserConsumer>
            </div>
            
        )
    }
}
export default ComponentF