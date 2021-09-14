import React from "react";
import styled from 'styled-components'

export default function Form(props){
    const FormStyle = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start4;
    `
    return(
    <FormStyle className='formContainer'>
        <label>{'name '} 
            <input type='text' name= 'name' placeholder='Juan Smith'/>
        </label>

        <label>{'role '} 
            <select name= 'role'>
                <option value=''>-select role-</option>
                <option value='front-end'>Front-End</option>
                <option value='back-end'>Back-End</option>
                <option value='designer'>Designer</option>
                <option value='tester'>Tester</option>
            </select>
        </label>
        <label>{'senior '} 
            <input type='checkbox' name= 'senior'/>
        </label>

        <label>{'email '} 
            <input type='text' name= 'email' placeholder='juansmith@sbemail.com'/>
        </label>

        <label>{'nickname '} 
            <input type='text' name= 'tag' placeholder='CanOnlyBJuan'/>
        </label>
    </FormStyle>
    )
}