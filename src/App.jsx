import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";


// Import pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./partials/dashboard/Analytics";
import HighCourt from "./pages/HighCourt";
import Login from "./pages/Login";
import DistrictCourt from "./pages/DistrictCourt";
import SupremeCourt from "./pages/SupremeCourt";
import ShowCaseDetail from "./pages/ShowCaseDetail";
import Courts from "./pages/Courts";
import Advocates from "./pages/Advocates";
import Acts from "./pages/Acts";

function App() {
  const location = useLocation();

  const [currentScreen, setCurrentScreen] = useState("Dahsboard");

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard"
          element={
            <Dashboard
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/highcourt"
          element={
            <HighCourt
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/districtcourt"
          element={
            <DistrictCourt
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/supremecourt"
          element={
            <SupremeCourt
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/courts"
          element={
            <Courts
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/advocates"
          element={
            <Advocates
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/acts"
          element={
            <Acts
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/showcasedetail" element={<ShowCaseDetail />} />
      </Routes>
    </>
  );
}

export default App;
