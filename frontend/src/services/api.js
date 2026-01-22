import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchLeads = () => API.get("/leads");

export const updateLeadStatus = (id, status) =>
  API.put(`/leads/${id}`, { status });

export const deleteLead = (id) =>
  API.delete(`/leads/${id}`);


export default API;
