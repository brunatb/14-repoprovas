import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { Link } from "react-router-dom";
import StyledBox from "../components/StyledBox";
import Form from "../components/Form";
import student from "../images/worried.svg";

export default function SendTest() {
  return (
    <StyledBox>
      <Link to="/">
        <ArrowBackIcon className="back" />
      </Link>
      <h1>Envie sua Prova!</h1>
      <Form />
      <img src={student} className="worried" alt="estudante preocupado" />
    </StyledBox>
  );
}
