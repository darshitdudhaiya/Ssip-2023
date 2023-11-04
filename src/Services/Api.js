import axios from "axios";
import { prefixUrl } from "./Config";

// ------------------ All Apis for Role ------------------
export const getAllRoles = async () => {
    const response = await axios.get(`${prefixUrl}/roles`).then(res => {
      return res.data
    })
  return response
};

// ------------------ All Apis for Case ------------------
export const getAllCases = async () => {
  const data = await axios.get(`${prefixUrl}/cases`);
  return data;
};
export const getCase = async (caseId) => {
  const data = await axios.get(`${prefixUrl}/cases/${caseId}`);
  return data;
};
export const deleteCase = async (deleteCaseId) => {
  const data = await axios.delete(
    `${prefixUrl}/cases?id=${deleteCaseId}`
  );
  return data;
};
export const addCase = async (caseTypeId,courtId,actId,advocateId,attorneyId,data) => {
  try {
    const response = await axios.post(`${prefixUrl}/cases/${caseTypeId}/${courtId}/${actId}/${advocateId}/${attorneyId}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// ------------------ All Apis for Advocate ------------------
export const getAllAdvocates = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/advocates`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  
};
export const getAdvocate = async (advocateId) => {
  const data = await axios.get(
    `${prefixUrl}/advocates/${advocateId}`
  );
  return data;
};
export const deleteAdvocate = async (deleteAdvocateId) => {
  const data = await axios.delete(
    `${prefixUrl}/advocates/${deleteAdvocateId}`
  );
  return data;
};
export const addAdvocate = async (data) => {
  try {
    const response = await axios.post(`${prefixUrl}/advocates`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// ------------------ All Apis for Act ------------------
export const getAllActs = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/acts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAct = async (actId) => {
  const response= await axios.get(`${prefixUrl}/acts/${actId}`);
  return response.data;
};
export const deleteAct = async (deleteActId) => {
  const response = await axios.delete(
    `${prefixUrl}/acts/${deleteActId}`
  );
  return response.data;
};
export const addAct = async (data) => {
  try {
    const response = await axios.post(`${prefixUrl}/acts`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateAct = async (data) => {
  console.log("Data :", data);
  try {
    let id = data.id;
    const response = await axios.put(`${prefixUrl}/acts/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// ------------------ All Apis for Court ------------------
export const getCourts = async (userRoleId, districtId) => {
  try {
    const response = await axios.get(`${prefixUrl}/FetchCourtAccRoleAndDis/${userRoleId}/${districtId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getAllCourts = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/courts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCourt = async (courtId) => {
  const data = await axios.post(`${prefixUrl}/courts/${courtId}`);
  return data;
};
export const deleteCourt = async (deleteCourtId) => {
  const data = await axios.delete(
    `${prefixUrl}/courts?id=${deleteCourtId}`
  );
  return data;
};
export const addCourt = async (data) => {
  try {
    const response = await axios.post(`${prefixUrl}/courts`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// ------------------ All Apis for CaseType ------------------
export const getAllCaseType = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/CaseType`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addCaseType = async (data) => {
  try {
    const response = await axios.post(`${prefixUrl}/CaseType`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateCaseType = async (data) => {
  console.log("Data :", data);
  try {
    let id = data.id;
    const response = await axios.put(`${prefixUrl}/CaseType/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCaseType = async (caseTypeId) => {
    try {
        const response = await axios.get(
          `${prefixUrl}/CaseType/${caseTypeId}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteCaseType = async (deleteCaseTypeId) => {
    try {
        const response = await axios.delete(
          `${prefixUrl}/CaseType/${deleteCaseTypeId}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// ------------------ All Apis for Witness ------------------
export const getAllWitness = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/Witness`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const addWitness = async (data,CaseId) => {

  const formData = new FormData();
  formData.append('Image', data.witnessImage);
  console.log(data);
  const response = fetch(`${prefixUrl}/Witness/${CaseId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', 
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log("ok ", response.data);
        return response.data;
      } else {
        console.log("notok ", response.data);
        return response.data;
      }
    })
    .catch((error) => {
      console.log("Error : ", error());
    });

    return response;


  // try {
  //   console.log("Data :", data);
  //   const response = await axios.post(
  //     `${prefixUrl}/Witness/${CaseId}`,
  //     data
  //   );
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  // }
};

export const getWitness = async (WitnessId) => {
  const response = await axios.get(
    `${prefixUrl}/Witness?id=${WitnessId}`
  );
  return response.data;
};

export const deleteWitness = async (deleteWitnessId) => {
  const response = await axios.delete(
    `${prefixUrl}/Witness?id=${deleteWitnessId}`
  );
  return response.data;
};



// ------------------ All Apis for State-----------

export const getAllStates = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/states`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addState = async (data) => {
  try {
    const response = await axios.post(`${prefixUrl}/States`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteState = async (deleteStateId) => {
  try {
      const response = await axios.delete(
        `${prefixUrl}/States/${deleteStateId}`
      );
      return response.data;
  } catch (error) {
      console.log(error);
  }
};

// ------------------ All Apis for District -----------

export const getAllDistrict = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/Districts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addDistrict = async (data) => {
  try {
    const response = await axios.post("${prefixUrl}/Districts", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDistrict = async (deleteDistrictId) => {
  try {
      const response = await axios.delete(
        `${prefixUrl}/Districts/${deleteDistrictId}`
      );
      return response.data;
  } catch (error) {
      console.log(error);
  }
};




// ------------------ All Apis for Sections ------------------

export const getAllSections = async () => {
  try {
    const response = await axios.get(`${prefixUrl}/sections`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSection = async (sectionId) => {
  const response= await axios.get(`${prefixUrl}/sections/${sectionId}`);
  return response.data;
};
export const deletesectionId = async (deletesectionId) => {
  const response = await axios.delete(
    `${prefixUrl}/acts/${deletesectionId}`
  );
  return response.data;
};
export const addSections = async (data) => {
  try {
    console.log(data)
    // const response = await axios.post(`${prefixUrl}/sections`, data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateSection = async (data) => {
  console.log("Data :", data);
  try {
    let id = data.id;
    const response = await axios.put(`${prefixUrl}/sections/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};