import axios from "axios";

const api = "http://localhost:5000/api";

const fetchQuestions = async (): Promise<any> => {
  const response = await fetch(`${api}/question`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });
  const questions = await response.json();
  return questions;
};

const calculatePersonality = async (answers: any): Promise<any> => {
  const response = await axios.post(`${api}/personality`, answers);
  // const result = await response.json();
  return response;
};

const showPersonalityResult = async (email: any): Promise<any> => {
  const result = await axios.post(`${api}/result`, email);
  return result;
};

const relationship = async (email: any): Promise<any> => {
  const result = await axios.get(`${api}/relationship?email=${email.email}`);
  return result;
};

export {
  fetchQuestions,
  calculatePersonality,
  showPersonalityResult,
  relationship,
};
