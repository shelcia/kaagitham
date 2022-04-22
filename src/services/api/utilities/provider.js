// provider.js

import axios from "axios";
import { handleResponse, handleError } from "./response";
import { LOCALHOST_URL } from "../../api";
// import { HEROKU_BASE_URL } from "../api";

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
// const BASE_URL = HEROKU_BASE_URL;
const BASE_URL = LOCALHOST_URL;

/** @param {string} resource */
const getAll = async (resource, signal, isAuthorized = false) => {
  const token = localStorage.getItem("KG-token");

  const headers = isAuthorized ? { "auth-token": `${token}` } : {};

  try {
    const response = await axios.get(`${BASE_URL}/${resource}`, {
      signal: signal,
      headers: headers,
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} id */
/** @param {string} additionalParam */
const getSingle = async (
  resource,
  id,
  signal,
  additionalParam = "",
  isAuthorized = false
) => {
  const token = localStorage.getItem("KG-token");

  const headers = isAuthorized ? { "auth-token": `${token}` } : {};

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.get(`${BASE_URL}/${resource}/${id}`, {
        signal: signal,
        headers: headers,
      });
    } else {
      // console.log(`${BASE_URL}/${resource}/${additionalParam}/${id}`);
      response = await axios.get(
        `${BASE_URL}/${resource}/${additionalParam}/${id}`,
        {
          signal: signal,
          headers: headers,
        }
      );
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {string} params */
const getByParams = async (resource, params, signal, isAuthorized = false) => {
  const token = localStorage.getItem("KG-token");
  const headers = isAuthorized ? { "auth-token": `${token}` } : {};

  try {
    const response = await axios.get(`${BASE_URL}/${resource}?${params}`, {
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
const post = async (
  resource,
  model,
  additionalParam = "",
  isAuthorized = false
) => {
  // console.log({ resource });
  const token = localStorage.getItem("KG-token");
  const headers = isAuthorized ? { "auth-token": `${token}` } : {};

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.post(`${BASE_URL}/${resource}`, model, {
        headers: headers,
      });
    } else {
      response = await axios.post(
        `${BASE_URL}/${resource}/${additionalParam}`,
        model,
        {
          headers: headers,
        }
      );
    }
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */

const postFormData = async (
  resource,
  model,
  additionalParam,
  isAuthorized = false
) => {
  const token = localStorage.getItem("KG-token");
  console.log("invoked");
  const headers = isAuthorized
    ? {
        "Content-Type": "multipart/form-data",
        "auth-token": `${token}`,
      }
    : { "Content-Type": "multipart/form-data" };

  // console.log({ headers });

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.post(`${BASE_URL}/${resource}`, model, {
        headers: headers,
      });
    } else {
      response = await axios.post(
        `${BASE_URL}/${resource}/${additionalParam}`,
        model,
        {
          headers: headers,
        }
      );
    }
    // console.log(await response);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

/** @param {string} resource */
/** @param {object} model */
const put = async (resource, model, signal, isAuthorized = false) => {
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
const putById = async (resource, id, model, signal, isAuthorized = false) => {
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
const patch = async (resource, model, signal, isAuthorized = false) => {
  const token = localStorage.getItem("KG-token");
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
const remove = async (resource, id, additionalParam, isAuthorized = false) => {
  const token = localStorage.getItem("KG-token");
  const headers = isAuthorized ? { "auth-token": `${token}` } : {};

  try {
    let response;
    if (additionalParam === "") {
      response = await axios.delete(`${BASE_URL}/${resource}/${id}`, {
        headers: headers,
      });
    } else {
      response = await axios.delete(
        `${BASE_URL}/${resource}/${additionalParam}/${id}`,
        {
          headers: headers,
        }
      );
    }
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
