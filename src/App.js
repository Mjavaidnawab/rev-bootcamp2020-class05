import './App.css';
import Parent from './Parent';
function App() {
  return (
    <div >
      <div id ='main'> This is Main Heading Parent child props data passing</div>
      <h1> Assalam o Aleikum Maryam and Mustafa</h1>
      <h2>Context API, Functional Component, API Tree</h2>
      <h5>Global Storage, Central Storage React’s Context API and useReducer React Hook </h5>
      <Parent name="Mustafa" ></Parent>
    </div>
  );
}

export default App;
