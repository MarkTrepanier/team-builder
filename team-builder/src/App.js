import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const team = [
  {
    name:'Tom',
    age: '34',
    role: 'front-end',
    tag: 'Carrots',
    senior: true
  },
  {
    name:'Lou',
    age: '35',
    role: 'back-end',
    tag: 'anti-lou',
    senior: true
  },
  {
    name:'Ericka',
    age: '26',
    role: 'design',
    tag: 'Chibi',
    senior: false
  },
  {
    name:'Alberto',
    age: '32',
    role: 'front-end',
    tag: 'Lethargiry',
    senior: true
  },
]
function App() {
  const [teamMembers, setTeamMemebrs] = useState()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to relewd.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
