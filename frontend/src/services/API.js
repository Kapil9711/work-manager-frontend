import axios from "axios";
import url from "./uri";

const headers = {
  "content-type": "application/json",
  withCredentials: true,
};

class API {
  constructor(url, credentials, headers) {
    this.api = axios.create({ baseURL: url, withCredentials: credentials });
    this.headers = headers;
  }

  //login user -> /api/v1/login
  async login(endPoint, bodyData) {
    const { data } = await this.api.post(endPoint, bodyData, this.headers);
    return data;
  }

  //logout user -> /api/v1/logout
  async logout(endPoint) {
    try {
      const { data } = await this.api.get(endPoint);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //get all tasks => /api/v1/tasks
  async getTasks(endPoint) {
    try {
      const { data } = await this.api.get(endPoint);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //very is user logged in => /api/v1/tasks
  async isUserLoggedin() {
    try {
      const { data } = await this.api.get("/verify");
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
}
console.log(url);

export default new API(url, true, headers);
