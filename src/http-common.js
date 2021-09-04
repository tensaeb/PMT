import axios from "axios";

export default axios.create({
  baseURL: "https://612e5686d11e5c001755850b.mockapi.io/",
  headers: {
    "Content-type": "application/json",
  },
});
