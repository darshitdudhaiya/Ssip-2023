import React, { useState } from 'react'

const Addcase = ({ addCaseOpen, closeAddCaseModel }) => {
    const [form, setForm] = useState({
        DateFiled: '',
        CnrNumber: '',
        CaseTypeId: '',
        CourtId: '',
        Petitioner: '',
        Defendant: '',
        JudgeName: '',
        AdvocateId: '',
        AttorneyId: '',
        CaseStatus: '',
        Judgment: '',
        Description: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        closeAddCaseModel();
    };
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
                                            defaultValue={form.DateFiled}
                                            onChange={handleInputChange}
                                            type="date"
                                            name='DateFiled'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CnrNumber</label>
                                        <input
                                            defaultValue={form.CnrNumber}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='CnrNumber'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CaseTypeId</label>
                                        <input
                                            defaultValue={form.CaseTypeId}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='CaseTypeId'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CourtId</label>
                                        <input
                                            defaultValue={form.CourtId}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='CourtId'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Petitioner</label>
                                        <input
                                            defaultValue={form.Petitioner}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='Petitioner'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Defendant</label>
                                        <input
                                            defaultValue={form.Defendant}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='Defendant'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>JudgeName</label>
                                        <input
                                            defaultValue={form.JudgeName}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='JudgeName'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>AdvocateId</label>
                                        <input
                                            defaultValue={form.AdvocateId}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='AdvocateId'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>AttorneyId</label>
                                        <input
                                            defaultValue={form.AttorneyId}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='AttorneyId'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>CaseStatus</label>
                                        <input
                                            defaultValue={form.CaseStatus}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='CaseStatus'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Judgment</label>
                                        <input
                                            defaultValue={form.Judgment}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='Judgment'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div>
                                        <label>Description</label>
                                        <input
                                            defaultValue={form.Description}
                                            onChange={handleInputChange}
                                            type="text"
                                            name='Description'
                                            className="w-full border border-gray-300 text-gray-900 mt-1 md:mt-3 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-x-3">
                                    <button onClick={handleSubmit} className="uppercase text-sm font-bold tracking-wide bg-indigo-500 hover:bg-indigo-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
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
export default Addcase