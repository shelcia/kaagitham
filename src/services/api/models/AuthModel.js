import { ApiCore } from "../utilities/core";

const url = "auth";

export const apiAuth = new ApiCore({
  getAll: true,
  getSingle: true,
  getByParams: true,
  post: true,
  postFormData: true,
  put: true,
  putById: true,
  patch: true,
  delete: true,
  url: url,
});
