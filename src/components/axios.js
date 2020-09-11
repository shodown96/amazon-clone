import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-3f488.cloudfunctions.net/api'
  // baseURL: "http://localhost:5001/clone-3f488/us-central1/api",
});

export default instance;


