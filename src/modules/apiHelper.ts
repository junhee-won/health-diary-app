import axios from "axios";

const serverApi = "http://localhost:8000";

interface ParameterType {
  url: string;
  method: string;
  body?: any;
}

const apiHelper = ({
  url: url,
  method: method,
  body: body = null,
}: ParameterType) => {
  return axios[method](serverApi + url, body)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};

export default apiHelper;
