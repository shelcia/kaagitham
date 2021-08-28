// core.js

import { apiProvider } from "./provider";

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = (signal) => {
        return apiProvider.getAll(options.url, signal);
      };
    }

    if (options.getSingle) {
      this.getSingle = (id, signal) => {
        return apiProvider.getSingle(options.url, id, signal);
      };
    }

    if (options.getByParams) {
      this.getByParams = (params, signal) => {
        return apiProvider.getByParams(options.url, params, signal);
      };
    }

    if (options.post) {
      this.post = (model, signal) => {
        return apiProvider.post(options.url, model, signal);
      };
    }

    if (options.postFormData) {
      this.postFormData = (model, signal) => {
        return apiProvider.postFormData(options.url, model, signal);
      };
    }

    if (options.put) {
      this.put = (model, signal) => {
        return apiProvider.put(options.url, model, signal);
      };
    }

    if (options.putById) {
      this.putById = (id, model, signal) => {
        return apiProvider.putById(options.url, id, model, signal);
      };
    }

    if (options.patch) {
      this.patch = (model, signal) => {
        return apiProvider.patch(options.url, model, signal);
      };
    }

    if (options.remove) {
      this.remove = (id, signal) => {
        return apiProvider.remove(options.url, id, signal);
      };
    }
  }
}
