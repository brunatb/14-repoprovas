import Container from "@material-ui/core/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  && {
    background-color: rgba(255, 255, 255, 0.2);
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 3em;
    max-height: 70vh;
    overflow-y: scroll;
  }
  border-radius: 1.5em;

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-corner {
    border-radius: 5px;
  }
  h3 {
    font-family: var(--general-font);
    font-size: 1.3em;
    color: #d0f0e4;
    text-align: center;
    margin-bottom: 0.8em;
  }

  .MuiButtonGroup-contained {
    width: fit-content;
    margin: 0.3em auto;

    & > .MuiButton-containedPrimary {
      background: #d0f0e4;
      border-color: #ddd;
      color: #f8226f;
      font-family: var(--general-font);
      font-weight: bold;
    }
  }

  .teachers-container,
  .tests-container,
  .class-container {
    margin: 1em auto 0 auto;
    width: 100%;
    button:first-child {
      border-top: 0;
    }

    button {
      width: 100%;
      font-family: var(--general-font);
      color: #d0f0e4;
      font-weight: bold;
      border-top: 1px solid #d0f0e4;
      border-bottom: 1px solid #d0f0e4;
      display: flex;
      justify-content: space-between;

      .number-tests {
        font-size: 0.8em;
      }
    }
  }
`;

export default StyledContainer;
