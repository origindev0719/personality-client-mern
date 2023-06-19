import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Test from "../pages/Home/Test";
import Result from "../pages/Home/Result";
import Relationship from "../pages/Home/Relationship";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
        <Route path="/relationship" element={<Relationship />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
