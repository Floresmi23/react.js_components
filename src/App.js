import './App.css';
import Box from "./components/Box";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";




function App() {
  return (
      <div className="App">
        <header className="App-header">


          <Box mess={"Name: Kevin"} nm={"The coolest color is Red"} number={1} />
          <Box1 mess={""} nm={"The coolest color is Yellow"} number={1}/>
          <Box2 mess={"Cartman"} nm={"Green"} number={1}/>
        </header>
      </div>
  );
}

export default App;
