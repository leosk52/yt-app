import axios from "axios";

const KEY = "AIzaSyDzUr1CjbNs1nO3d5-AXMBMk37Qwm4qsWg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
