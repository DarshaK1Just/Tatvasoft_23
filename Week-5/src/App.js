import logo from './logo.svg';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import ParentComponent2 from './components/ParentComponent2';
import { CountProvider } from './components/CountContext';
import ParentComponent3 from './components/ParentComponent3';
import './App.css';

function App() {
  return (
    <div className="App"> <hr></hr>
      <header className="App-header">
      <br></br>
        <h1>Week 5 Day 21 Counter</h1>
      </header>
      <Counter/> <hr></hr>
      <header className="App-header">
      <br></br>
        <h1>Week 5 Day 22 Parent-Child </h1>
      </header>
      <ParentComponent/> <hr></hr>
      <header className="App-header">
      <br></br>
        <h1>Week 5 Day 23 Parent-multiple Child Instant </h1>
      </header>
      <ParentComponent2/> <hr></hr>
      <header className="App-header">
      <br></br>
        <h1>Week 5 Day 24 </h1>
      </header>
      <CountProvider> 
        <ParentComponent3/>
      </CountProvider>
    </div>
  );
}

export default App;
