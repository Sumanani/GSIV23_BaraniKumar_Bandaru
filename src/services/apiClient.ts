import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "71eb7cafbe180e4d2a7c3b8f8ac83d78",
  },
});
