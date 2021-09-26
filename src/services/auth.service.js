import axios from "axios";

const API_URL = "https://projmangtool.herokuapp.com/";

class AuthService {
  async login(email, password) {
    return axios
      .post(API_URL + "login/", { email, password })
      .then((response) => {
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  register(first_name, last_name, email, password) {
    return axios.post(API_URL + "signup/", {
      first_name,
      last_name,
      email,
      password,
    });
  }

  logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUser");
  };
}

export default new AuthService();
