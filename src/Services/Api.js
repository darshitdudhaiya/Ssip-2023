import axios from 'axios'

// ------------------ All Apis for Case ------------------
export const getAllCases = async () => {
    const data = await axios.get(`http://172.24.0.1:5000/cases`);
    return data;
}
export const getCase = async (caseId) => {
    const data = await axios.get(`http://172.24.0.1:5000/cases?id=${caseId}`);
    return data;
}
export const deleteCase = async (deleteCaseId) => {
    const data = await axios.delete(`http://172.24.0.1:5000/cases?id=${deleteCaseId}`);
    return data;
}

// ------------------ All Apis for Advocate ------------------
export const getAllAdvocates = async () => {
    const data = await axios.get(`http://172.24.0.1:5000/advocates`);
    return data;
}
export const getAdvocate = async (AdvocateId) => {
    const data = await axios.get(`http://172.24.0.1:5000/advocates?id=${AdvocateId}`);
    return data;
}
export const deleteAdvocate = async (deleteAdvocateId) => {
    const data = await axios.delete(`http://172.24.0.1:5000/advocates?id=${deleteAdvocateId}`);
    return data;
}

// ------------------ All Apis for Act ------------------
export const getAllActs = async () => {
    const data = await axios.get(`http://172.24.0.1:5000/acts`);
    return data;
}
export const getAct = async (ActId) => {
    const data = await axios.get(`http://172.24.0.1:5000/acts?id=${ActId}`);
    return data;
}
export const deleteAct= async (deleteActId) => {
    const data = await axios.delete(`http://172.24.0.1:5000/acts?id=${deleteActId}`);
    return data;
}

// ------------------ All Apis for Court ------------------
export const getAllCourts = async () => {
    const data = await axios.get(`http://172.24.0.1:5000/courts`);
    return data;
}
export const getCourt = async (CourtId) => {
    const data = await axios.post(`http://172.24.0.1:5000/courts?id=${CourtId}`);
    return data;
}
export const deleteCourt = async (deleteCourtId) => {
    const data = await axios.delete(`http://172.24.0.1:5000/courts?id=${deleteCourtId}`);
    return data;
}