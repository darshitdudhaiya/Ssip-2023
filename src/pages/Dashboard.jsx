import React, { useState, useEffect } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import CasesCard from "../common/CasesCard";
import CasesTable from "../common/CasesTable";
import { cases, advocates, courts, acts } from "../constant";

function Dashboard({ caseData, currentScreen, setCurrentScreen, isLoggedIn }) {
  if (!isLoggedIn) window.location.href = "/";

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addCaseOpen, setAddCaseOpen] = useState(false);

  const closeAddCaseModel = () => {
    setAddCaseOpen(false);
  };
  useEffect(() => {
    setCurrentScreen("Dashboard");
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={isLoggedIn}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-end sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <CasesCard
                mainTitle={"District Court Pending Cases"}
                casesNumber={"24,780"}
                options={[{ name: "Option 1" }, { name: "Option 2" }]}
              />

              <CasesCard
                mainTitle={"High Court Pending Cases"}
                casesNumber={"24,780"}
                options={[{ name: "Option 1" }, { name: "Option 2" }]}
              />

              <CasesCard
                mainTitle={"Supreme Court Pending Cases"}
                casesNumber={"24,780"}
                options={[{ name: "Option 1" }, { name: "Option 2" }]}
              />

              <CasesCard
                mainTitle={"District Court Completed Cases"}
                casesNumber={"24,780"}
                options={[{ name: "Option 1" }, { name: "Option 2" }]}
              />

              <CasesCard
                mainTitle={"High Court Completed Cases"}
                casesNumber={"24,780"}
                options={[{ name: "Option 1" }, { name: "Option 2" }]}
              />

              <CasesCard
                mainTitle={"Supreme Court Completed Cases"}
                casesNumber={"24,780"}
                options={[{ name: "Option 1" }, { name: "Option 2" }]}
              />

              <CasesTable
                caseData={caseData}
                tableName={"District Court Current Cases"}
                cases={cases}
              />
              <CasesTable
                tableName={"High Court Current Cases"}
                cases={cases}
              />
              <CasesTable
                tableName={"Supreme Court Current Cases"}
                cases={cases}
              />
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Dashboard;
