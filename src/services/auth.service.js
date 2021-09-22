import axios from "axios";

const API_URL = "https://projmangtool.herokuapp.com/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login/", { email, password })
      .then((response) => {
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(first_name, last_name, email, password) {
    return axios.post(API_URL + "signup/", {
      first_name,
      last_name,
      email,
      password,
    });
  }
}

export default new AuthService();
