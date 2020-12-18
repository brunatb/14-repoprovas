import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import StyledBox from '../components/StyledBox';
import StyledContainer from '../components/StyledContainer';
import Teachers from '../components/Teachers';

export default function ListMode(){
    const [isListByTeacher, setIsListByTeacher] = useState(true);

    return(
        <StyledBox>
            <h2>Provas</h2>
            <StyledContainer>
                <h3>Listar provas por: </h3>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primarybutton   group">
                    <Button>Professor</Button>
                    <Button>Matéria</Button>
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