import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    padding: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-family: var(--especial-font);
        margin: 0 0 1em 0;
        font-size: 3em;
        text-align: center;
        color: #D0F0E4;
    }

    .student{
        position: absolute;
        bottom: 0;
        left: -10vw;
        width: 50vw;
    }

    .worried{
        position: absolute;
        width: 40vw;
        right: 1vw;
        bottom: 4vh;

    }

    .back{
        position: absolute;
        font-size: 2.5em;
        color: #D0F0E4;
        left: 10vw;
        top: 10vh;
        cursor: pointer;
    }
`;

export default StyledBox;

