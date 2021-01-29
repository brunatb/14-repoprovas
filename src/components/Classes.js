/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Classes() {
  const [semesters, setSemesters] = useState([]);
  const [classes, setClasses] = useState([]);
  const [semester, setSemester] = useState(1);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(
        `${process.env.REACT_APP_BACKURL}/api/classes/semesters`
      );
      setSemesters(request.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(
        `${process.env.REACT_APP_BACKURL}/api/classes/semesters/${semester}`
      );
      setClasses(request.data);
    }
    fetchData();
  }, [semester]);

  return (
    <>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primarybutton    group"
      >
        {semesters.length !== 0
          ? semesters.map((s) => (
              <Button key={s.id} onClick={() => setSemester(s.id)}>
                {s.name}
              </Button>
            ))
          : null}
      </ButtonGroup>
      <ul className="class-container">
        {classes.length !== 0
          ? classes.map((c) => (
              <li
                key={c.id}
                onClick={() =>
                  history.push(`/materia/${c.id}/semester/${semester}`)
                }
              >
                <Button>
                  <span>{c.name}</span>
                  <span className="number-tests">
                    Provas: {c.numberOfTests}
                  </span>
                </Button>
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
