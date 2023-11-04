import React, { useState } from "react";
import AddWitness from "../Modals/AddWitness";
import InsertAdvocate from "../Modals/InsertAdvocate";
import {
  deleteCaseType,
  getCaseType,
  deleteAct,
  getAct,
  getAdvocate,
  deleteState,
  deleteAdvocate,
} from "../Services/Api";
import { addWitness } from "../Services/Api";
import AddCaseType from "../Modals/AddCaseType";
import InsertActs from "../Modals/InsertActs";
import { useNavigate } from "react-router-dom";

function CasesTable({
  caseData,
  tableName,
  cases,
  HearingDetail,
  Evidence,
  Courts,
  Advocates,
  Acts,
  CaseType,
  States,
  Districts,
  isLoggedIn,
  sections,
}) {
  const [addWitnessOpen, setAddWitnessOpen] = useState(false);

  const navigate = useNavigate();

  const [witnessData, setWitnessData] = useState({
    witnessName: "",
  });

  const formData = new FormData();

  const onSubmitWitnessForm = async (data) => {
    // setWitnessData(data);
    // console.log(witnessData)
    // formData.append("witnessName", data.witnessName);
    formData.append("witnessImage", data.witnessImage);
    console.log(data);
    const res = await addWitness(data, 1);
    console.log(res);
  };

  const closeWitness = () => {
    setAddWitnessOpen(false);
  };

  // ------------------ operations for CaseType ------------------

  const [editCaseTypeData, setEditCaseTypeData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const closeCaseTypeModel = () => {
    setIsOpen(false);
  };
  const deleteCasetype = async (e) => {
    const deleteCaseTypeId = e;
    const res = await deleteCaseType(deleteCaseTypeId);
  };
  const editCasetype = async (e) => {
    const res = await getCaseType(e);
    setEditCaseTypeData(res);
    setIsOpen(true);
  };
  //---------------operation for Advocate ----------------------
  const [editAdvocate, setEditAdvocate] = useState([]);
  const closeAdvocateModel = () => {
    setIsOpen(false);
  };
  const edit_Advocate = async (e) => {
    const res = await getAdvocate(e);
    setEditAdvocate(res);
    // console.log(res.data,editAdvocate);
    setIsOpen(true);
  };
  const delete_Advocate = async (e) => {
    const deleteAdvocateId = e;
    const res = await deleteAdvocate(deleteAdvocateId);
  };
  //--------------- operation for State ----------------------

  const deleteStates = async (e) => {
    const deleteStateId = e;
    const res = await deleteState(deleteStateId);
    console.log(res);
  };

  // ------------------ operations for singleAct ------------------

  const [editsingleActData, setEditSingleActData] = useState([]);

  const closeSingleActTypeModel = () => {
    setIsOpen(false);
  };
  const deleteSingleAct = async (e) => {
    const deleteCaseTypeId = e;
    const res = await deleteAct(deleteCaseTypeId);
  };
  const editSingleAct = async (e) => {
    const res = await getAct(e);
    setEditSingleActData(res);
    console.log(res);
    setIsOpen(true);
  };
  if (cases) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {tableName}
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Case Number</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Date File</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Case type</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Advocate</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Attorney Advocate
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Defendant</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Petitioner
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Judge</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Case Status
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Case Report
                      </div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {cases
                    ? cases.map((singleCase) => {
                        return (
                          <tr key={singleCase.id}>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {singleCase.cnrNumber}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {singleCase.dateFile}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-emerald-500">
                                {singleCase.caseType}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {singleCase.advocate}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-sky-500">
                                {singleCase.attoryAdvocate}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {singleCase.defendant}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {singleCase.petttioer}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {singleCase.judge}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-emerald-500">
                                {singleCase.caseStatus}
                              </div>
                            </td>
                            <td className="p-2">
                              <button
                                className="flex justify-center text-center"
                                style={{ width: "100%" }}
                                // onClick={() => deleteCasetype(record.id)}
                                onClick={() =>
                                  navigate("/dashboard/showCaseDetail")
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={20}
                                  fill="currentColor"
                                  className="bi bi-eye"
                                  viewBox="0 0 16 16"
                                >
                                  {" "}
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />{" "}
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />{" "}
                                </svg>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (HearingDetail) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between ">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100 align-middle ">
              {tableName}
            </h2>
            <button
              onClick={() => {
                setAddCaseOpen(true);
              }}
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add view</span>
            </button>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-center">Case Id</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Hearing date
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        HearingDetails
                      </div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {HearingDetail
                    ? HearingDetail.map((HearingDetailsData) => {
                        return (
                          <tr key={HearingDetailsData.Id}>
                            <td className="p-2">
                              <div className="text-center">
                                {HearingDetailsData.CaseId}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-emerald-500">
                                {HearingDetailsData.HearingDate}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {HearingDetailsData.HearingDetails}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (Evidence) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between ">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100 align-middle ">
              {tableName}
            </h2>
            <button
              onClick={() => {
                setAddWitnessOpen(true);
              }}
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add view</span>
            </button>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-center">Case Id</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Evidence description
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Image</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {Evidence
                    ? Evidence.map((Evidencedata) => {
                        return (
                          <tr key={Evidencedata.Id}>
                            <td className="p-2">
                              <div className="text-center">
                                {Evidencedata.CaseId}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-emerald-500">
                                {Evidencedata.EvidenceDescription}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                Image is loading...
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <AddWitness
          isLoggedIn={isLoggedIn}
          isOpen={addWitnessOpen}
          onClose={closeWitness}
          onSubmitForm={onSubmitWitnessForm}
        />
      </>
    );
  }
  if (Courts) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {tableName}
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Identification Number
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Address</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {Courts
                    ? Courts.map((singleCourt) => {
                        return (
                          <tr key={singleCourt.id}>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {singleCourt.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {singleCourt.identificationNumber}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center text-emerald-500">
                                {singleCourt.fullAddress}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (Advocates) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {tableName}
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">
                        Enrollment Number
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Actionn</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {Advocates
                    ? Advocates.map((singleAdvocate) => {
                        return (
                          <tr key={singleAdvocate.id}>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {singleAdvocate.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {singleAdvocate.enrollmentNumber}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="inline-flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  <button
                                    onClick={() =>
                                      deleteAdvocate(singleAdvocate.id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="text-slate-800 dark:text-slate-100 ml-5">
                                  <button
                                    onClick={() => {
                                      edit_Advocate(singleAdvocate.id);
                                    }}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <InsertAdvocate
              editAdvocateData={editAdvocate}
              isOpen={isOpen}
              onClose={closeAdvocateModel}
            />
          </div>
        </div>
      </>
    );
  }

  if (Acts) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {tableName}
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Description</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Actions</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {Acts
                    ? Acts.map((singleAct) => {
                        return (
                          <tr key={singleAct.id}>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {singleAct.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {singleAct.description}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="inline-flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  <button
                                    onClick={() =>
                                      deleteSingleAct(singleAct.id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="text-slate-800 dark:text-slate-100 ml-5">
                                  <button
                                    onClick={() => editSingleAct(singleAct.id)}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <InsertActs
          editSingleAct={editsingleActData}
          isOpen={isOpen}
          onClose={closeSingleActTypeModel}
        />
      </>
    );
  }
  if (CaseType) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {tableName}
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Case Name</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">
                        Case Description
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Actions</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {CaseType
                    ? CaseType.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {item.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {item.description}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="inline-flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  <button
                                    onClick={() => deleteCasetype(item.id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="text-slate-800 dark:text-slate-100 ml-5">
                                  <button onClick={() => editCasetype(item.id)}>
                                    Edit
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <AddCaseType
          editCaseTypeData={editCaseTypeData}
          isOpen={isOpen}
          onClose={closeCaseTypeModel}
        />
      </>
    );
  }

  if (States) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {tableName}
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Sr No.</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">State</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Actions</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {States
                    ? States.map((singleState) => {
                        return (
                          <tr key={singleState.id}>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {singleState.id}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {singleState.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="inline-flex items-center">
                                <div className="text-slate-800 dark:text-slate-100 ml-5">
                                  <button
                                    onClick={() => editState(singleState.id)}
                                  >
                                    Edit
                                  </button>
                                </div>
                                <div className="text-slate-800 dark:text-slate-100 ml-5">
                                  <button
                                    onClick={() => deleteStates(singleState.id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (Districts) {
    return (
      <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            {tableName}
          </h2>
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full dark:text-slate-300">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Sr No.</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Districts</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Actions</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}

              <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                {Districts
                  ? Districts.map((singleDistricts) => {
                      return (
                        <tr key={singleDistricts.id}>
                          <td className="p-2">
                            <div className="flex items-center">
                              <div className="text-slate-800 dark:text-slate-100">
                                {singleDistricts.id}
                              </div>
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="flex items-center">
                              <div className="text-slate-800 dark:text-slate-100">
                                {singleDistricts.name}
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  if (sections) {
    return (
      <>
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {tableName}
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Description</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Actions</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}

                <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                  {sections
                    ? sections.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {item.name}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  {item.description}
                                </div>
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="inline-flex items-center">
                                <div className="text-slate-800 dark:text-slate-100">
                                  <button
                                    onClick={() => deleteSections(item.id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                                <div className="text-slate-800 dark:text-slate-100 ml-5">
                                  <button onClick={() => editSections(item.id)}>
                                    Edit
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <InsertActs
          editSingleAct={editsingleActData}
          isOpen={isOpen}
          onClose={closeSingleActTypeModel}
        />
      </>
    );
  }
}

export default CasesTable;
