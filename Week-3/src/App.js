import './App.css';
import Users from './components/User';
import Post from './components/Post';
import CounterHook from './components/CounterHook';
import LoginForm from './components/LoginForm';
import Userchangetask5 from './components/Userchangetask5';

function App() {
  return (
    <div className="App">
      <header>
        <hr></hr>
        <h1>Day 11</h1>
        <hr></hr>
      </header>
      <Users/>
      <header >
        <hr></hr>
        <h1>Day 12</h1>
        <hr></hr>
      </header>
      <Post/>
      <header>
        <hr></hr>
        <h1>Day 13</h1>
        <hr></hr>
      </header>
      <CounterHook/>
      <header>
        <hr></hr>
        <h1>Day 14</h1>
        <hr></hr>
      </header>
      <LoginForm/>
      <header>
        <hr></hr>
        <h1>Day 15</h1>
        <hr></hr>
      </header>
      <Userchangetask5/>
    </div>
  );
}

export default App;
