import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import BackupIcon from '@material-ui/icons/Backup';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import student from '../images/studying.svg';
export default function Home(){
    return(
        <>
        <StyledBox>
            <h1>RepoProvas</h1>
            <StyledContainer>
                <StyledButton variant="contained">
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


const StyledBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    padding: 3em;

    h1{
        font-family: var(--especial-font);
        margin: 0 0 1em 0;
        font-size: 3em;
        text-align: center;
        margin: 1.5em 0 0.8em 0;
        color: #D0F0E4;
    }

    .student{
        position: absolute;
        bottom: 0;
        left: -10vw;
        width: 50vw;
    }

`;

const StyledContainer = styled(Container)`
    &&{
        background-color: rgba(255, 255, 255, 0.2);
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 3em;
    }
    border-radius: 1.5em;
`;

const StyledButton = styled(Button)`
    &&{
        height: 4em;
        background-color:#D0F0E4;
        font-family: var(--general-font);
        border-radius: 1em;
        color: #F8226F;
        font-weight: bold;
        :first-child{
            margin: 0 0 1em 0;
        }

        svg{
            margin: 0 0.5em 0 0;
        }
    }
`;