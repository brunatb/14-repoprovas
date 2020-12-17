import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
    &&{
        height: 4em;
        background-color:#D0F0E4;
        font-family: var(--general-font);
        border-radius: 0.9em;
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

export default StyledButton;