import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {  
    FormControl, 
    InputLabel, 
    Input, 
    FormHelperText,
} from '@material-ui/core';

import SelectOptions from './SelectOptions';
import StyledButton from './StyledButton';

export default function Form(){
    const [testName, setTestName] = useState('');
    const [testUrl, setTestUrl] = useState('');
    const [classOption, setClassOption] = useState('');
    const [classes, setClasses] = useState([]);
    const [teacher, setTeacher] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [semester, setSemester] = useState('');
    const [semesters, setSemesters] = useState([]);
    const [type, setType] = useState('');
    const [types, setTypes] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const request = await axios.get(`${process.env.REACT_APP_BACKURL}/api/classes`);
                setClasses(request.data);
                const requestTypes = await axios.get(`${process.env.REACT_APP_BACKURL}/api/categories`);
                setTypes(requestTypes.data);
                setTeachers([]);
                setSemesters([]);

            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

   
    useEffect(() => {
        if(classOption){
            async function fetchData(){
                try{
                    const request = await axios.get(`${process.env.REACT_APP_BACKURL}/api/${classOption}/teachers`);
                    setTeachers(request.data);
                    setSemesters([]);
                }catch(err){
                    console.log(err)
                }
            }
            fetchData();
        }

    }, [classOption]);

    useEffect(() => {
        if(classOption && teacher){
            async function fetchData(){
                try{
                    const request = await axios.get(`${process.env.REACT_APP_BACKURL}/api/${classOption}/${teacher}/semester`);
                    setSemesters(request.data);
                }catch(err){
                    console.log(err);
                }
            }
            fetchData();
        }
    }, [classOption, teacher]);

    return(
        <StyledForm>
            <FormControl variant="outlined">
                <InputLabel htmlFor="test">Prova</InputLabel>
                <Input id="test" value={testName} onChange={ e => {
                    setTestName(e.target.value);
                }} label="test" />
                <FormHelperText id="test">Dê um nome para sua prova</FormHelperText>
            </FormControl>

            <FormControl variant="outlined">
                <InputLabel htmlFor="url">Url</InputLabel>
                <Input id="url" value={testUrl} onChange={e => {
                    setTestUrl(e.target.value);
                }} label="url" />
                <FormHelperText id="url">Digite a url da sua prova</FormHelperText>
            </FormControl>
            
            <SelectOptions 
                state = {classOption} 
                setState = {setClassOption}  
                label = {'Disciplinas'}
                options = {classes}
            />
            <SelectOptions 
                state = {teacher} 
                setState = {setTeacher}  
                label = {'Professores'}
                options = {teachers}
            />
            
            <div className = 'select-container'>
                <SelectOptions 
                    state = {semester} 
                    setState = {setSemester}  
                    label = {'Semestre'}
                    options = {semesters}
                />
                <SelectOptions 
                    state = {type} 
                    setState = {setType}  
                    label = {'Tipo'}
                    options = {types}
                />
            </div>
            
            <StyledButton>Enviar</StyledButton>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 2em 2.5em;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 1.5em;
    z-index: 1;

    .MuiOutlinedInput-input{
        padding: 0.8em;
    }

    .MuiInput-underline:after{
        border-bottom: 2px solid #D0F0E4;
    }

    .MuiFormLabel-root.Mui-focused{
        color: #D0F0E4;
    }

    .MuiFormHelperText-contained{
        margin: 0.1em 0;
    }

    .MuiFormHelperText-root, .MuiFormLabel-rootlabel{
        font-family: var(--general-font);
    }

    .MuiFormControl-root{
        margin-bottom: 0.5em;
    }

    .select-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .MuiFormControl-root{
            width: 48%;
        }
    }

    button{
        margin-top: 1em;
    }
`;
