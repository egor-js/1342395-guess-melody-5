import React from "react";
import PropTypes from "prop-types";
import BrowserRouter from "react-router-dom";
import Switch from "react-router-dom";
import Route from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomeScreen errorsCount={errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
