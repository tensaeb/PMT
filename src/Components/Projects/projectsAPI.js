import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getProjects = () => api.get("/projects").then((res) => res.data);

export const getProject = (id) =>
  api.get(`/projects/${id}`).then((res) => res.data);

export const updateProject = (id, ...updatedProject) =>
  api.get(`/projects/${id}`, updatedProject).then((res) => res.data);

export const deleteProject = (id) =>
  api.get(`/projects/${id}`).then((res) => res.data);
