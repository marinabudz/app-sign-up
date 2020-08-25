import React from "react";
import "./App.scss";
import SignUpContainer from "./containers/Sign-Up-Container";
import SignIn from "./components/sign-in/sign-in";
import Navigation from "./components/navigation/navigation";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Navigation} exact />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
