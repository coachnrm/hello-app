import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HelloWorld from './HelloWorld';

const myComponentStyle = {
  color: 'blue',
  lineHeight: 3,
  padding: '1.5rem'
}

function App() {
  return (
    <>
      <Header></Header>
      <h2 className='header'>Welcome to React</h2> 
      <div style={{color: "red", border: '1px solid green'}}>Welcome Here</div>
      <hr />
      <input type="text"/>
      <p style={myComponentStyle}>Another Element</p>
      <button className='btn'>My Btn</button>
    </>
      
  );
}

export default App;
