import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/wenzhiTeo/Typicode_Demo_Fork/user",
  });
}
