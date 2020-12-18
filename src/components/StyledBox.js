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

    h1, h2{
        font-family: var(--especial-font);
        margin: 0 0 0.8em 0;
        text-align: center;
        color: #D0F0E4;
    }

    h1{
        font-size: 3em;
    }

    h2{
        font-size: 2.5em;
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

    .library{
        position: absolute;
        width: 35vw;
        top: -5vh;
        right: 0;
    }

    .prom{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40vw;
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

