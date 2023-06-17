import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Test from "../pages/Home/Test";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
