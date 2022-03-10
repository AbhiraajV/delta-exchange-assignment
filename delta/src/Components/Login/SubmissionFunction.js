import axios from "axios";

export default async (isLogin, input) => {
  console.log(isLogin);
  if (isLogin) return loginFunction(input);
  else return await regFunction(input);
};

async function regFunction(input) {
  console.log(input);
  return axios
    .post("http://localhost:9000/api/signup", input)
    .then((data) => {
      localStorage.setItem("user", data.data.user);
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
async function loginFunction(input) {
  console.log(input);
  return axios
    .post("http://localhost:9000/api/login", {
      email: input.email,
      password: input.password,
    })
    .then((data) => {
      localStorage.setItem("user", data.data.user);
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
