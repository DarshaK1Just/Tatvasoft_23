import Home from './components/Home';
import RenderPropsComponent from './components/RenderPropsComponent';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import List from './components/List';
import Loginform from './components/Loginform';
import PureComp from './components/PureComp';
import Title from './components/Title';
import InputRef from './components/InputRef';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <h1>Day 7</h1>
      <Loginform/>
      <h1>Day 6</h1>
      <List/>      
      <h1>Day 8</h1>
      <PureComp/>
      <InputRef/>
      <FocusInput/>


      <h1>day 9 </h1>
      <Home/>
      <RenderPropsComponent render={() => {
          return (
            <h3> Back in Game from render props </h3>
          )
        }} />
        <h1>Day 10</h1>
        <UserProvider value=" : DK context provider ">
        <ComponentC/>
        </UserProvider>
    </div>
    
  );
}

export default App;