import Axios from "axios";

const KEY = "AIzaSyCYxRRwa_r6tNpsX32-toOJMJA7Qo7EoD8";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
