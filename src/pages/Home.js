import React from 'react';
import BackupIcon from '@material-ui/icons/Backup';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import student from '../images/studying.svg';

import StyledBox from '../components/StyledBox';
import StyledContainer from '../components/StyledContainer';
import StyledButton from '../components/StyledButton';
import { useHistory } from 'react-router-dom';

export default function Home(){
    const history = useHistory();
    return(
        <>
        <StyledBox>
            <h1>RepoProvas</h1>
            <StyledContainer>
                <StyledButton variant="contained" onClick={() => history.push('/enviar')}>
                    <BackupIcon />
                    Enviar Prova
                </StyledButton>
                <StyledButton variant="contained">
                    <LibraryBooksIcon />
                   Consultar Prova
                </StyledButton>
            </StyledContainer>
            <img src={student} alt= "estudante" className="student" />
        </StyledBox>
        </>
    )
}



