import React from 'react'

const Form = ({ addCaseOpen, closeAddCaseModel }) => {
    return (
        <div>
            <div className={`fixed z-50 left-0 top-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden ${addCaseOpen ? 'block' : 'hidden'}`}>
                <div className="w-full">
                    <div className=' flex justify-center'>
                        <div className="mx-3 md:mx-10 my-4 md:px-4 bg-white">
                            <div className="w-full p-8">
                                <div className="flex justify-center">
                                    <h1 className="font-bold uppercase text-3xl dark:text-gray-800">
                                        Add case
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 gap-1 md:gap-5 md:grid-cols-3 mt-1 dark:text-gray-800">
                                    <div>
                                        <label>DateFiled</label>
                                        <input
                                            type="date"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CnrNumber</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CaseTypeId</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CourtId</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Petitioner</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Defendant</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>JudgeName</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>AdvocateId</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>AttorneyId</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CaseStatus</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Judgment</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-x-3">
                                    <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 hover:bg-indigo-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                                        Add case
                                    </button>
                                    <button onClick={closeAddCaseModel} className="uppercase text-sm font-bold tracking-wide border border-indigo-600 text-indigo-600 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
