/* eslint-disable no-nested-ternary */
import Axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";

export default function Tests({ teacherId, categorie }) {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await Axios.get(
          `${process.env.REACT_APP_BACKURL}/api/teachers/${teacherId}/${categorie}`
        );
        setTests(request.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [categorie, teacherId]);

  return (
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
  );
}
