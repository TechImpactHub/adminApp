import axios from "axios";

export default axios.create({ 
  baseURL: "https://guta.digital:8000",
  headers: {
    "Content-type": "application/json"
  }
});