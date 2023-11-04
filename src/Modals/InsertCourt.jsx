import { React, useState, useEffect } from "react";
// import { getAllDistrict } from "../Services/Api";


function InsertCourt({ isOpen, onClose, onSubmitForm }) {

  // const allStates = [
  //   "Andhra Pradesh",
  //   "Arunachal Pradesh",
  //   "Assam" /* ... add all states */,
  // ];

  const [districtDataList, setdistrictDataList] = useState([]);

  const [form, setForm] = useState({
    Courtname: "",
    Statename: "",
    Districtname: "",
    Address: "",
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

    onSubmitForm(form); // Pass the form data to the parent component

    onClose();
  };

  useEffect(() => {
    getAllDistrict().then((response) => {
      return response.json();
    }).then((data) => {
      const districtDataList = data;
      console.log(districtDataList)
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  

  return (
    <>
      <div
        className={`fixed z-50 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[22rem] sm:w-full sm:max-w-lg">
          <div className="h-full relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div>
              <div className="items-center justify-between p-4 rounded-t dark:border-gray-600">
                <label htmlFor="state" className="block font-semibold mb-2">
                  Court Name:
                </label>
                <input
                  defaultValue={form.Courtname}
                  onChange={handleInputChange}
                  type="text"
                  name="Courtname"
                  placeholder="Courtname"
                  className="pl-2 inputbox outline-none border-none text-gray-900 text-sm rounded-lg block w-full focus:outline-none focus:border-none"
                />
              </div>
              <div className="items-center justify-between p-4 rounded-t dark:border-gray-600">
                <label htmlFor="state" className="block font-semibold mb-2">
                  Select State:
                </label>
                <input
                  defaultValue="Gujarat"
                  onChange={handleInputChange}
                  type="text"
                  name="Statename"
                  placeholder="Statename"
                  className="pl-2 inputbox outline-none border-none text-gray-900 text-sm rounded-lg block w-full focus:outline-none focus:border-none"
                  disabled="disabled"
                />
              </div>
              <div className="items-center justify-between p-4 rounded-t dark:border-gray-600">
                <label htmlFor="district" className="block font-semibold mb-2">
                  Select District:
                </label>
                <select
                  defaultValue={form.Districtname}
                  onChange={handleInputChange}
                  id="district"
                  name="Districtname"
                  className="pl-2 inputbox outline-none border-none text-gray-900 text-sm rounded-lg block w-full focus:outline-none focus:border-none"
                >
                  {/* <option value="">Select a district</option>
                  {districtDataList.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))} */}
                </select>
              </div>
              <div className="items-center justify-between p-4 rounded-t dark:border-gray-600">
                <label htmlFor="district" className="block font-semibold mb-2">
                  Address
                </label>
                <input
                  defaultValue={form.Address}
                  onChange={handleInputChange}
                  type="text"
                  name="Address"
                  placeholder="Address"
                  className="pl-2 inputbox outline-none border-none text-gray-900 text-sm rounded-lg block w-full focus:outline-none focus:border-none"
                />
              </div>
              <div className="flex justify-end items-center p-4 space-x-2  rounded-b">
                <button
                  onClick={handleSubmit}
                  className="bg-[#10375e] hover:bg-[#185490] text-white font-semibold hover:text-white py-2 px-4 border  rounded focus:outline-none focus:ring-0"
                >
                  Add
                </button>
                <button
                  onClick={onClose}
                  className="bg-white text-[#10375e] font-bold  py-2 px-5 border hover:border-[#10375e] rounded focus:outline-none focus:ring-0"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InsertCourt;
