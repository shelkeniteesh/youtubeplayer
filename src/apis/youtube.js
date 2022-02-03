import axios from "axios";

const KEY = "AIzaSyA89vJv2vz2ZfRw1D29O0TOUGzbMApUhDc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
