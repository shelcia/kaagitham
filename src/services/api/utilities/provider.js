// provider.js

import axios from "axios";
import { handleResponse, handleError } from "./response";
// import {
//   // MOCKAPI_BASE_URL,
//   HEROKU_BASE_URL,
// } from "../../api";

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
// const BASE_URL = MOCKAPI_BASE_URL;
// const BASE_URL = HEROKU_BASE_URL;

const BASE_URL = "http://localhost:4050/api";

/** @param {string} resource */
const getAll = async (resource, signal) => {
  const token = localStorage.getItem("HRT-Token");
  try {
    const response = await axios.get(`${BASE_URL}/${resource}`, {
      signal: signal,
      headers: {
        "auth-token": token,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} id */
const getSingle = async (resource, id, signal) => {
  const token = localStorage.getItem("HRT-Token");
  try {
    const response = await axios.get(`${BASE_URL}/${resource}/${id}`, {
      signal: signal,
      headers: {
        "auth-token": token,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} params */
const getByParams = async (resource, params, signal) => {
  const token = localStorage.getItem("HRT-Token");
  try {
    const response = await axios.get(`${BASE_URL}/${resource}?${params}`, {
      signal: signal,
      headers: {
        "auth-token": token,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const post = async (resource, model, signal) => {
  const token = localStorage.getItem("HRT-Token");
  console.log({ model });
  try {
    const response = await axios.post(`${BASE_URL}/${resource}`, model, {
      signal: signal,
      headers: {
        "auth-token": token,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */

const postFormData = async (resource, model, signal) => {
  const token = localStorage.getItem("HRT-Token");
  const headers = {
    "Content-Type": "multipart/form-data",
    "auth-token": token,
  };
  try {
    const response = await axios.post(`${BASE_URL}/${resource}`, model, {
      signal: signal,
      headers: headers,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const put = async (resource, model, signal) => {
  try {
    const response = await axios.put(`${BASE_URL}/${resource}`, model, {
      signal: signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const putById = async (resource, id, model, signal) => {
  try {
    const response = await axios.put(`${BASE_URL}/${resource}/${id}`, model, {
      signal: signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const patch = async (resource, model, signal) => {
  const token = localStorage.getItem("HRT-Token");
  try {
    const response = await axios.patch(`${BASE_URL}/${resource}`, model, {
      signal: signal,
      headers: {
        "auth-token": token,
      },
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} id */
const remove = async (resource, id, signal) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${resource}`, id, {
      signal: signal,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const apiProvider = {
  getAll,
  getSingle,
  getByParams,
  post,
  postFormData,
  put,
  putById,
  patch,
  remove,
};
