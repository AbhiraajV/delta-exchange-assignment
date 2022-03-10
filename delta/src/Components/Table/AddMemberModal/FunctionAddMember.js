import axios from "axios";
import { addMember } from "../../../Features/team";
export default async (input, dispatch) => {
  console.log(input);
  axios
    .post("http://localhost:9000/api/createteam", input, {
      headers: { Authorization: localStorage.getItem("user") },
    })
    .then((data) => {
      console.log(data.data.member);
      dispatch(addMember(data.data.member));
      return data.data.member;
    })
    .catch((err) => console.log(err));
};
