// import React, { Component } from 'react'
// import { useHistory } from 'react-router-dom';

// class EventBind extends Component {
//     // constructor(props) {
//     //   super(props)
    
//     //   this.state = {
//     //      message: 'This is Home Page!!'
//     //   }
//     // }
//     // clickHandler() {
//     //     this.setState({
//     //         message: "This is About Page!!"
//     //     })
//     //     console.log(this)
//     // }
    
//   render() {
//     function HomePage() {
//         const history = useHistory();
      
//         function handleAboutClick() {
//           history.push('/about');
//         }
//     return (
//       <div>
//         {/* <div>{this.state.message}</div> */}
//         {/* <button onClick={this.clickHandler.bind(this)}>About Us</button> */}
//         <button onClick={handleAboutClick}>Go to About Page</button>
//       </div>
//     );
//   }
//   function AboutPage() {
//     const history = useHistory();
  
//     function handleHomeClick() {
//       history.push('/');
//     }
  
//     return (
//       <div>
//         <h1>About Us</h1>
//         <button onClick={handleHomeClick}>Go to Home Page</button>
//       </div>
//     );
//   }
// }

// export default EventBind
