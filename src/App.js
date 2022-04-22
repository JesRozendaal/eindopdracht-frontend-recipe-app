import React from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LoginRegister from "./pages/login-register/LoginRegister";
import Recipe from "./pages/recipe/Recipe";
import Subrecipe from "./pages/subrecipe/Subrecipe";
import Decision from "./pages/decision/Decision";
import Fridge from "./pages/fridge/Fridge";

function App() {
  return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login-register">
            <LoginRegister />
          </Route>
          <Route exact path="/recipes">
            <Recipe />
          </Route>
          <Route path="/recipes/:recipeId">
            <Subrecipe />
          </Route>
          <Route path="/decision-maker">
            <Decision />
          </Route>
          <Route path="/whats-in-your-fridge">
            <Fridge />
          </Route>
        </Switch>

        {/*<footer className="outer-footer-container">*/}
        {/*  <div className="inner-container">*/}
        {/*    © Jessica Rozendaal*/}
        {/*  </div>*/}
        {/*</footer>*/}

      </>
  );
}

export default App;
