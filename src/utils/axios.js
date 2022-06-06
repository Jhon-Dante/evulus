import axios from "axios";
import ENV from './env';

// const { REACT_APP_BASE_API: baseURL } = process.env

let _axios = axios.create({
  baseURL: ENV.BaseURI
});

const createFormData = (data) => {
  var formdata = new FormData();
  for (var key in data) {
    if (Array.isArray(data[key])) {
      for (var _key in data[key]) {
        if (Array.isArray(data[key][_key])) {
          for (var i in data[key][_key]) {
            formdata.append(key + '[' + _key + '][' + i + ']', data[key][_key][i]);
          }
        }
        else {
          formdata.append(key + '[' + _key + ']', data[key][_key]);
        }
      }      
    }
    else {
      formdata.append(key, data[key]);
    }    
  }
  return formdata;
}

_axios.all = axios.all;
_axios.spread = axios.spread;
_axios.upload = (url, data) => {
  return _axios.post('http://127.0.0.1:8000/api'+url, createFormData(data), {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
export default _axios;
