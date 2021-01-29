/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-undef */
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { CircularProgress } from "@material-ui/core";

import StyledBox from "../components/StyledBox";
import StyledContainer from "../components/StyledContainer";
import prom from "../images/prom.svg";

export default function ClassPage() {
  const { id, semesterId } = useParams();
  const [className, setClassName] = useState("");
  const [categories, setCategories] = useState([]);
  const [categorie, setCategorie] = useState(1);
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const requestName = await Axios.get(
          `${process.env.REACT_APP_BACKURL}/api/classes/${id}`
        );
        setClassName(requestName.data.name);

        const requestCategories = await Axios.get(
          `${process.env.REACT_APP_BACKURL}/api/categories`
        );
        setCategories(requestCategories.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const requestTests = await Axios.get(
          `${process.env.REACT_APP_BACKURL}/api/semester/${semesterId}/classes/${id}/categories/${categorie}`
        );
        setTests(requestTests.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [categorie]);
  console.log(loading);
  return (
    <StyledBox>
      <img src={prom} alt="formatura" className="prom" />
      <Link to="/consultar">
        <ArrowBackIcon className="back" />
      </Link>
      {className ? <h2>{className}</h2> : null}

      <StyledContainer loading={loading}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primarybutton    group"
        >
          {categories.length !== 0
            ? categories.map((c) => (
                <Button key={c.id} onClick={() => setCategorie(c.id)}>
                  {c.name}
                </Button>
              ))
            : null}
        </ButtonGroup>
        <div className="tests-container">
          {tests.length === 0 && loading ? (
            <CircularProgress color="secondary" />
          ) : tests.length === 0 && !loading ? (
            <h3>Não há provas dessa categoria</h3>
          ) : (
            tests.map((t) => (
              <a href={t.url} target="_blank" rel="noreferrer" key={t.id}>
                <Button>
                  <span>{t.name}</span>
                  <span>{t.className}</span>
                </Button>
              </a>
            ))
          )}
        </div>
      </StyledContainer>
    </StyledBox>
  );
}
