import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

import StyledBox from '../components/StyledBox';
import StyledContainer from '../components/StyledContainer';
import Tests from '../components/Tests';
import prom from '../images/prom.svg';

export default function TeacherPage(){
    const { id } = useParams();
    const [teacher, setTeacher] = useState('');
    const [categories, setCategories] = useState([]);
    const [categorie, setCategorie] = useState(1);

    useEffect(() => {
        async function fetchData(){
            try{
                const requestName = await Axios.get(`${process.env.REACT_APP_BACKURL}/api/teachers/${id}`);
                setTeacher(requestName.data.name);
    
                const requestCategories = await Axios.get(`${process.env.REACT_APP_BACKURL}/api/categories`);
                setCategories(requestCategories.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [id])

    return(
        <StyledBox>
            <img src={prom} alt="formatura" className='prom' />
            <Link to='/consultar'>
                <ArrowBackIcon className="back" />
            </Link>
            {
                teacher ?
                <h2>{teacher}</h2>
                :
                null
            }

            <StyledContainer>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primarybutton    group">
                    {
                        categories.length !== 0 ?
                        categories.map(c => <Button key={c.id} 
                            onClick={() => setCategorie(c.id)
                            }
                        >{c.name}</Button>)
                        :
                        null
                    }
                </ButtonGroup>
                {
                    categories.length !== 0 ?
                    <Tests 
                        teacherId={id}
                        categorie={categorie}
                    />
                    :
                    null
                }
            </StyledContainer>

        </StyledBox>
    )
}