import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/ReduxStore/Store";
import Accordian from "./Components/Accordian/Accordian";
import { StyledEngineProvider } from "@mui/material";

const App = () => {
  return (
    <>
      <Provider store={store} className="p-0 m-0">
        <StyledEngineProvider injectFirst>
          <NavBar />
          {/* <Accordian /> */}
          <Outlet />
        </StyledEngineProvider>
      </Provider>
    </>
  );
};

export default App;
