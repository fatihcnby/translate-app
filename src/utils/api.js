import axios from "axios";


export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "8f2338731dmshad5eab8466f1c23p1b528fjsn439012045b95",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
});
