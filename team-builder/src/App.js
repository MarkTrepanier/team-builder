import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

//team values: name, age, role, tag, senior
const initialTeam = [
  {name:'Tom',age: '34',role: 'front-end',tag: 'Carrots',senior: true},
  {name:'Lou',age: '35',role: 'back-end',tag: 'anti-lou',senior: true},
  {name:'Ericka',age: '26',role: 'designer',tag: 'Chibi',senior: false},
  {name:'Alberto',age: '32',role: 'tester',tag: 'Lethargiry',senior: true},
]
function App() {
  const [teamMembers, setTeamMemebrs] = useState(initialTeam)
  return (
    <div className="App">
     {teamMembers.map((tm,idx)=>{
       return(
       <h2 key={idx}>{tm.name} or {tm.tag}: our {tm.senior ? 'senior ':''}{tm.role}</h2>
       )
     })}
    </div>
  );
}

export default App;
