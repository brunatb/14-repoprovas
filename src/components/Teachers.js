import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

export default function Teachers(){
    const [teachers, setTeachers] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(true)

   useEffect(() => {
       async function fetchData(){
           try{
                const request = await axios.get(`${process.env.REACT_APP_BACKURL}/api/teachers`);
                setTeachers(request.data);
                setLoading(false)
           }catch(err){
                console.log(err);
           }
       }
       fetchData();
   },[]);
    return(
        <ul className="teachers-container">
            {
                teachers.length === 0 && loading ?
                <CircularProgress color="secondary" /> 
                :
                teachers.length === 0 && !loading ?
                <h2>Nenhum professor encontrado</h2>
                :
                teachers.map(t =>{
                    return(
                        <li key={t.id} onClick={() => history.push(`/professor/${t.id}`)}>
                            <Button  >
                                <span>{t.name}</span>
                                <span className="number-tests">Provas: {t.numberOfTests}</span>
                            </Button>
                        </li>
                    )
                })
            }
        </ul>
    )
}