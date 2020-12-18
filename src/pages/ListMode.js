import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

import StyledBox from '../components/StyledBox';
import StyledContainer from '../components/StyledContainer';
import Teachers from '../components/Teachers';
import library from '../images/library.svg'

export default function ListMode(){
    const [isListByTeacher, setIsListByTeacher] = useState(true);

    return(
        <StyledBox>
            <img src={library} alt="estudante na biblioteca" className='library' />
            <Link to='/'>
                <ArrowBackIcon className="back" />
            </Link>
            <StyledContainer>
                <h3>Listar provas por: </h3>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primarybutton   group">
                    <Button onClick={() => setIsListByTeacher(true)}>Professor</Button>
                    <Button onClick={() => setIsListByTeacher(false)}>Matéria</Button>
                </ButtonGroup>
                {
                    isListByTeacher ? 
                    <Teachers/>
                    :
                    null
                }

            </StyledContainer>
        </StyledBox>
    )
}