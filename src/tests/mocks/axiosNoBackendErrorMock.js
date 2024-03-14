export default {
  message: "Network Error",
  name: "AxiosError",
  code: "ERR_NETWORK",
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: [
      "xhr",
      "http",
    ],
    transformRequest: [
      function transformRequest(data, headers) {
        const contentType = headers.getContentType() || '';
        const hasJSONContentType = contentType.indexOf('application/json') > -1;
        const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);
        if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
          data = new FormData(data);
        }
        const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);
        if (isFormData) {
          return hasJSONContentType ? JSON.stringify((0, _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)) {
          return data;
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
          return data.buffer;
        }
        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
          headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
          return data.toString();
        }
        let isFileList;
        if (isObjectPayload) {
          if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
            return (0, _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
          }
          if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
            const _FormData = this.env && this.env.FormData;
            return (0, _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(isFileList ? {
              'files[]': data
            } : data, _FormData && new _FormData(), this.formSerializer);
          }
        }
        if (isObjectPayload || hasJSONContentType) {
          headers.setContentType('application/json', false);
          return stringifySafely(data);
        }
        return data;
      },
    ],
    transformResponse: [
      function transformResponse(data) {
        const transitional = this.transitional || defaults.transitional;
        const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        const JSONRequested = this.responseType === 'json';
        if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
          const silentJSONParsing = transitional && transitional.silentJSONParsing;
          const strictJSONParsing = !silentJSONParsing && JSONRequested;
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === 'SyntaxError') {
                throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e;
            }
          }
        }
        return data;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: function FormData() {},
      Blob: function Blob() {},
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": null,
    },
    baseURL: "http://localhost:3001",
    method: "get",
    url: "/result/ltg69e29jynesvss",
    data: undefined,
  },
  request: {
  },
}