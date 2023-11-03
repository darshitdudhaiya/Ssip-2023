import React from "react";

function CasesTable({ tableName, cases, HearingDetail, Evidence, courts ,advocates,acts}) {

  if (cases) {
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
                    <div className="font-semibold text-center">Petitioner</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Judge</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Case Status</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Case Report</div>
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
                          <div className="text-center">{singleCase.judge}</div>
                        </td>
                        <td className="p-2">
                          <div className="text-center text-emerald-500">
                            {singleCase.caseStatus}
                          </div>
                        </td>
                        <td className="p-2">
                          <button className="flex justify-center text-center" style={{ width: "100%" }} >
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
    );
  }
  else if (HearingDetail) {
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
                    <div className="font-semibold text-center">Case Id</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Hearing date</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">HearingDetails</div>
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
    );
  }
  else if (Evidence) {
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
                    <div className="font-semibold text-center">Case Id</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Evidence description</div>
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
    );
  }
  else if (courts) {
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
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">State</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">District</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Address</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}

              <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                {courts
                  ? courts.map((singleCourt) => {
                    return (
                      <tr key={singleCourt.id}>
                        <td className="p-2">
                          <div className="flex items-center">
                            <div className="text-slate-800 dark:text-slate-100">
                              {singleCourt.courtName}
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">
                            {singleCourt.courtState}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center text-emerald-500">
                            {singleCourt.courtDistrict}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-center">
                            {singleCourt.courtAddress}
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
  else if (advocates) {
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
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Enrollment Number</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}

              <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                {advocates
                  ? advocates.map((singleAdvocate) => {
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
                      </tr>
                    );
                  })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  else if(acts){
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
                                  <div className="font-semibold text-left">Name</div>
                              </th>
                          </tr>
                      </thead>
                      {/* Table body */}

                      <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
                          {acts
                              ? acts.map((singleAct) => {
                                  return (
                                      <tr key={singleAct.id}>
                                          <td className="p-2">
                                              <div className="flex items-center">
                                                  <div className="text-slate-800 dark:text-slate-100">
                                                      {singleAct.name}
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
  )
  }
}

export default CasesTable;
