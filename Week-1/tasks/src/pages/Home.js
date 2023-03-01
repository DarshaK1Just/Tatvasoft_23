import React, { Component } from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'
import Message from '../components/Message'
import UserGreeting from '../components/UserGreeting'
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import EventBind from '../components/EventBind'
import About from '../components/About'



class Home extends Component {
  
  
  
  // constructor() {
  //   super()
  //   this.state ={
  //       title: 'Welcome People !!',
  //       dis: 'This is description !'
  //   }
  // }
  render() {
    
    
  return (
    <div>
        <UserGreeting/>      
        {/* <Title name="darshak" work="student"/>
        <Title name="akshay" work="student"/> */}
        {/* <h1>{this.state.title}</h1>
        <h3>{this.state.dis}</h3> */}
        <Title title='Welcome To Home Page' dis="This is simple basic home page with design with Task-1 given instruction." />
        <Title title="Description" dis="This React website's homepage is built using the React library and provides a seamless user experience through its dynamic rendering capabilities. It should have a clean and modern design, with easily accessible navigation and responsive layouts that adapt to different screen sizes. A simple home page in React should prioritize the most important information, such as a brief company overview or featured products/services, and offer a clear call to action to guide visitors towards their desired actions."/>
        <Counter/>
        <Message/>
        <Title title='Back To Grind !!' dis="Fill free to ask anything and use over code as referance. This is very beneficiary provided to some people." />
        {/* <div>
            <button onClick={this.navAbout}>About Page</button> <hr />
            <Routes>
                <Route path="/" element={<About />} />
            </Routes>   
        </div> */}
        {/* <EventBind/> */}
    </div>
  );
}
}




export default Home