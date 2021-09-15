import React from "react";
import styled from 'styled-components'

const FormStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
label{
    margin:5px;
}
`

export default function Form(props){
    const {values, update, submit} = props;

    const onChange = evt => {
        const {name, value} = evt.target
        
        update(name, value);
      }

    const onSubmit = event =>{
        event.preventDefault();
        submit();
    }


    return(
    <FormStyle className='formContainer' onSubmit={onSubmit}>
        <h2>Team Form</h2>
        <label>{'name '} 
            <input type='text' name= 'name' placeholder='Juan Smith' onChange={onChange} value={values.name}/>
        </label>

        <label>{'role '} 
            <select name= 'role'onChange={onChange} value={values.role}>
                <option value=''>-select role-</option>
                <option value='front-end'>Front-End</option>
                <option value='back-end'>Back-End</option>
                <option value='designer'>Designer</option>
                <option value='tester'>Tester</option>
            </select>
        </label>
        <label>{'senior '} 
            <input type='checkbox' name= 'senior' onChange={onChange} value={values.senior}/>
        </label>

        <label>{'email '} 
            <input type='text' name= 'email' placeholder='juansmith@sbemail.com' onChange={onChange} value={values.email}/>
        </label>

        <label>{'nickname '} 
            <input type='text' name= 'tag' placeholder='CanOnlyBJuan' onChange={onChange} value={values.tag}/>
        </label>

        <input type='submit' value='Add Team Member'/>
    </FormStyle>
    )
}