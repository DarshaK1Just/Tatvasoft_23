import React,{Component} from "react";
import './style.css'
class Loginform extends Component {

    constructor(props){
        super(props)
        this.state = {
            Username : ''
        }
        this.state = {
            Email: ''
        }
        this.state = {
            Password: ''
        }
    }
    handleUSernameChange = (event) => {
        this.setState({
            Username:event.target.value
        })
    }
    handleEmailChange = (event) =>{
        this.setState({
            Email:event.target.value
        })
    }
    handlePasswordChange = (event) =>{
        this.setState({
            Password: event.target.value
        })
    }
    handleClickEvent = (event) => {
       alert("Username:"+ this.state.Username +"    " + "Email:" + this.state.Email + "    " + "Password" + this.state.Password)
      }
      
    render(){
    return (
        <div>
            <form className="login">
                <label>Username : </label>
                <input type="text" value={this.state.Username} onChange={this.handleUSernameChange}></input><br></br>
                <label>Email : </label>
                <input type="email" value={this.state.Email} onChange={this.handleEmailChange}></input><br></br>
                <label>Password : </label>
                <input type="password" value={this.state.Password} onChange={this.handlePasswordChange}></input><br></br>
                <button className="b1" onClick={this.handleClickEvent}>Submit</button>
            </form>
        </div>
    )
    }
}
export default Loginform;