import axios from "axios";

export default axios.create({
  // baseURL: "https://612e5686d11e5c001755850b.mockapi.io/",
  baseURL: "https://projmangtool.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
