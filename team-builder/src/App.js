import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import Axios from 'axios'

//team values: name, age, role, tag, senior
const initialTeam = [
  {name:'Tom', role: 'front-end',tag: 'Carrots',senior: true, email:''},
  {name:'Lou', role: 'back-end',tag: 'anti-lou',senior: true, email:''},
  {name:'Ericka', role: 'designer',tag: 'Chibi',senior: false, email:''},
  {name:'Morgan', role: 'designer',tag: 'Gunz',senior: true, email:''},
  {name:'lorelei', role: 'tester',tag: '',senior: false, email:''},
  {name:'Alberto', role: 'tester',tag: 'Lethargiry',senior: true, email:''}
]
const initialFormData={
  name:'', role: '', tag: '', senior: false, email: ''
}

//APP
function App() {
  const [teamMembers, setTeamMemebrs] = useState(initialTeam);
  const [formData, setFormData] = useState(initialFormData);

  const updateForm =(inputName, inputValue)=>{
    setFormData({...formData, [inputName]:inputValue});
  }
  const submitForm=()=>{
    const newTM={
      name:formData.name,
      role: formData.role,
      tag: formData.tag,
      senior: formData.senior,
      email: formData.email
    }

    // Axios.post('fakeapi.com',newTM)
    // .then(resp=>{
    //   const idunno = resp.data;
    //   setTeamMemebrs([resp.data, ...teamMembers])
    // })
    setTeamMemebrs(teamMembers.concat(newTM));
  }

  return (
    <div className="App">
      <h1 className='title' handle>3 Decker Team</h1>
     {teamMembers.map((tm,idx)=>{
       return(
       <h2 key={idx}>{tm.name} {tm.tag ? `or ${tm.tag}`: ''}: our {tm.senior ? 'senior ':''}{tm.role}</h2>
       )
     })}
     <Form 
      update={updateForm}
      submit={submitForm}
      values={formData}
    />
    </div>
  );
}

export default App;
