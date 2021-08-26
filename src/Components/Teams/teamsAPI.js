import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getTeams = () => api.get("/teams").then((res) => res.data);

export const getTeam = (id) => api.get(`/teams/${id}`).then((res) => res.data);

export const updateTeam = ({ id, ...updatedTeam }) =>
  api.put(`/teams/${id}`, updatedTeam).then((res) => res.data);

export const deleteTeam = (id) =>
  api.delete(`/teams/${id}`).then((res) => res.data);

export const createTeam = () => api.post("/teams").then((res) => res.data);
