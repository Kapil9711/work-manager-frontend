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

  //login user -> /api/v1/register
  async register(endPoint, bodyData) {
    try {
      const { data } = await this.api.post(endPoint, bodyData, this.headers);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //login user -> /api/v1/login
  async login(endPoint, bodyData) {
    try {
      const { data } = await this.api.post(endPoint, bodyData, this.headers);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //login user -> /api/v1/password/forgot
  async forgotPassword(endPoint, bodyData) {
    try {
      const { data } = await this.api.put(endPoint, bodyData, this.headers);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //login user -> /api/v1/password/forgot
  async resetPassword(endPoint, bodyData) {
    try {
      const { data } = await this.api.put(endPoint, bodyData, this.headers);
      return data;
    } catch (error) {
      return error.response.data;
    }
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

  //veryfi is user logged in => /api/v1/verify
  async isUserLoggedin() {
    try {
      const { data } = await this.api.get("/verify");
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //logout user => /api/v1/logout
  async logoutUser() {
    try {
      const { data } = await this.api.get("/logout");
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //user profile => /api/v1/profile
  async getUserProfile() {
    try {
      const { data } = await this.api.get("/profile");
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //update profile => /api/v1/profile
  async updateProfile(endPoint, body) {
    try {
      const { data } = await this.api.put(endPoint, body);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  //upload image => /api/v1/image/id
  async uploadImage(endPoint, body) {
    try {
      const { data } = await this.api.post(endPoint, body, {
        "Content-Type": "multipart/form-data",
      });
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  // *************************************task api*****************

  //get all tasks => /api/v1/tasks
  async getTasks(endPoint) {
    try {
      const { data } = await this.api.get(endPoint);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
  //create new task => /api/v1/task/new
  async newTask(endPoint, body) {
    try {
      const { data } = await this.api.post(endPoint, body, this.headers);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  // update task => /api/v1/tasks/:id
  async updateTask(endPoint, body) {
    try {
      const { data } = await this.api.put(endPoint, body, this.headers);
      return data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default new API(url, true, headers);
