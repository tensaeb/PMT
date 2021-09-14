import http from "../http-common";

class ProjectDataService {
  getAll() {
    return http.get("projs/");
  }
  get(id) {
    return http.get(`projs/${id}`);
  }
  create(data) {
    return http.post("projs/", data);
  }
  update(id, data) {
    return http.put(`projs/${id}/`, data);
  }
  delete(id) {
    return http.delete(`projs/${id}/`);
  }
}

export default new ProjectDataService();
