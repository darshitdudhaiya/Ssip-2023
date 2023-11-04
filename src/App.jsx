import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { getAllCases } from "./Services/Api";
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
import CaseType from "./pages/CaseType";
import EvidencePage from './pages/EvidencePage';
import Cases from "./pages/Cases";
import States from "./pages/States";
import Sections from "./pages/Sections";
import Districts from "./pages/Districts";
import AddWitness from "./Modals/AddWitness";
import Demo from './pages/Demo';

function App() {

  const location = useLocation();
  const [caseData, setCaseData] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentScreen, setCurrentScreen] = useState("Dahsboard");

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    async function fetchData() {
      const casesData = await getAllCases();
      setCaseData(casesData);
    }

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact 
          path="/" 
          element={
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <Dashboard
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              caseData={caseData}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/cases"
          element={
            <Cases
              isLoggedIn={isLoggedIn}
              caseData={caseData}
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
              isLoggedIn={isLoggedIn}
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
              isLoggedIn={isLoggedIn}
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
              isLoggedIn={isLoggedIn}
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
              isLoggedIn={isLoggedIn}
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
              isLoggedIn={isLoggedIn}
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
              isLoggedIn={isLoggedIn}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/Casetype"
          element={
            <CaseType
              isLoggedIn={isLoggedIn}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/states"
          element={
            <States
              isLoggedIn={isLoggedIn}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/districts"
          element={
            <Districts
              isLoggedIn={isLoggedIn}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route
          exact
          path="/dashboard/evidence"
          element={
            <EvidencePage
              isLoggedIn={isLoggedIn}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          }
        />
        <Route path="/dashboard/analytics" element={<Analytics isLoggedIn={isLoggedIn} />} />
        <Route path="/dashboard/showcasedetail" element={<ShowCaseDetail isLoggedIn={isLoggedIn}/>} />
        <Route path="/dashboard/demo" element={<Demo />} />
        <Route path="/dashboard/sections" element={<Sections isLoggedIn={isLoggedIn}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen} />} />
      </Routes>
    </>
  );
}

export default App;
