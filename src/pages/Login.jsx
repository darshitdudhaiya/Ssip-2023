import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isDistrict, setIsDistrict] = useState(false);
  const data = [{ dname: "Jmangar", cname: "jamngar" }];
  const users = [
    { name: "Government" },
    {
      name: "Supreme",
    },
    {
      name: "High",
    },
    {
      name: "District",
    },
  ];
  const isSelectUser = (e) => {
    if (e === "District") {
      return setIsDistrict(true);
    }
    return setIsDistrict(false);
  };
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <>
      {/* component */}
      <div className="h-screen">
        <div className="flex w-full h-screen justify-center py-10 items-center bg-white">
          <div className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <select
                onChange={(e) => {
                  isSelectUser(e.target.value);
                }}
                id="courts-select"
                className="pl-2 inputbox outline-none border-none text-gray-900 text-sm rounded-lg block w-full focus:outline-none focus:border-none"
              >
                <option selected>Choose an User</option>
                {users.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            {isDistrict ? (
              <div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <select
                    id="district-select"
                    className="pl-2 outline-none border-none text-gray-900 text-sm rounded-lg block w-full  focus:outline-none focus:border-none"
                  >
                    <option selected>Choose District</option>
                    {data.map((item) => (
                      <option value="US">{item.dname}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <select
                    id="district-court-select"
                    className="pl-2 outline-none border-none text-gray-900 text-sm rounded-lg block w-full  focus:outline-none focus:border-none"
                  >
                    <option selected>Choose Court</option>
                    {data.map((item) => (
                      <option value="US">{item.cname}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : null}

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={handleLogin}
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Forgot Password ?
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;
