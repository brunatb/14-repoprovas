import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Teachers(){
    const [teachers, setTeachers] = useState([]);

   useEffect(() => {
       async function fetchData(){
           try{
                const request = await axios.get(`${process.env.REACT_APP_BACKURL}/api/teachers`);
                setTeachers(request.data);
           }catch(err){
                console.log(err);
           }
       }
       fetchData();
   },[]);

    return(
        <ul className="teachers-container" role='tabpanel'>
            {
                teachers.length !== 0 ?
                teachers.map(t =>{
                    return(
                        <li>
                            <Button key={t.id} >
                                <span>{t.name}</span>
                                <span className="number-tests">Provas: {t.numberOfTests}</span>
                            </Button>
                        </li>
                    )
                })
                :
                null
            }
        </ul>
    )
}