import Container from '@material-ui/core/Container';
import styled from 'styled-components';

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

export default StyledContainer;