import React from "react";
import PostDetail from "./components/PostDetail";
import RegisterUser from "./components/RegisterUser";
import Users from "./components/User";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Week 4 PostDetails</h1>
        <br></br>
      </header>
      <PostDetail />
      <header className="App-header">
      <br></br>
        <h1>Week 4 day 19 RegisterUser</h1>
      </header>
      <RegisterUser/>
      <header className="App-header">
      <br></br>
        <h1>Week 4 day 19 task 2 UserDetail using memo</h1>
      </header>
      <Users/>
      <header className="App-header">
      <br></br>
        <h1>Week 4 day 20 task 2 Form and debounce method</h1>
      </header>
      <Form/>
    </div>
   
  );
}

export default App;
