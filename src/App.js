import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import ListMode from "./pages/ListMode";
import SendTest from "./pages/SendTest";
import TeacherPage from "./pages/TeacherPage";
import ClassPage from "./pages/ClassPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/enviar">
          <SendTest />
        </Route>
        <Route path="/consultar">
          <ListMode />
        </Route>
        <Route path="/professor/:id">
          <TeacherPage />
        </Route>
        <Route path="/materia/:id/semester/:semesterId">
          <ClassPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  :root{
    --gradient: radial-gradient(99.2% 191.19% at 97.22% 3.71%, rgba(249, 213, 24, 0.78) 11.21%, rgba(249, 24, 105, 0.95) 92.71%);
    --general-font: 'Open Sans', sans-serif;
    --especial-font: 'Abril Fatface', cursive;
  }

  #root{
    min-height: 100vh;
    width: 100%;
    background: var(--gradient);
  }
`;

export default App;
