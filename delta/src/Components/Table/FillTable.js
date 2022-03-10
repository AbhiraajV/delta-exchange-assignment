import axios from "axios";
export default () => {
  console.log("IN");
  return axios
    .get("http://localhost:9000/api/getteam", {
      headers: { Authorization: localStorage.getItem("user") },
    })
    .then((data) => {
      console.log(data.data.team.team);
      return data.data.team.team;
    })
    .catch((error) => console.log(error + "ejf"));
};
