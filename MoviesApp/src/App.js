import React from "react";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import PageNotFound from "./components/page-not-found";
import MovieDetails from "./components/movie-details";
import Registration from "./components/registration";
import Employees from "./components/employees";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id?" component={MovieDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/employees" component={Employees} />
        <Route path="/" exact component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
