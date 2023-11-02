import React, { useState, useEffect } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
// import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import Banner from "../partials/Banner";
import CasesCard from "../common/CasesCard";
import CasesTable from "../common/CasesTable";
import { cases } from "../constant";

function Dashboard({ currentScreen, setCurrentScreen }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-end sm:items-center mb-8">
              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add view</span>
                </button>
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
              {/* Bar chart (Direct vs Indirect) */}
              {/* <DashboardCard04 /> */}
              {/* Line chart (Real Time Value) */}
              {/* <DashboardCard05 /> */}
              {/* Doughnut chart (Top Countries) */}
              {/* <DashboardCard06 /> */}
              {/* Table (Top Channels) */}
              <CasesTable
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
              {/* <DashboardCard07 /> */}
              {/* Line chart (Sales Over Time) */}
              {/* <DashboardCard08 /> */}
              {/* Stacked bar chart (Sales VS Refunds) */}
              {/* <DashboardCard09 /> */}
              {/* Card (Customers) */}
              {/* <DashboardCard10 /> */}
              {/* Card (Reasons for Refunds) */}
              {/* <DashboardCard11 /> */}
              {/* Card (Recent Activity) */}
              {/* <DashboardCard12 /> */}
              {/* Card (Income/Expenses) */}
              {/* <DashboardCard13 /> */}
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <img
                  src="path-to-criminal-photo"
                  alt="Criminal Photo"
                  className="h-64 w-full object-cover object-center"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">Case Details</h2>
                  <p>Case Number: 123456</p>
                  <p>Date: January 1, 2023</p>
                  <p>
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Dashboard;
