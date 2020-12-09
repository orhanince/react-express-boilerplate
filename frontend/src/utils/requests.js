import axios from "axios";

const setTokenService = (token) => {
  axios.defaults.headers.common["Authorization-X"] = `${token}`;
};
const setNullTokenService = () => {
  axios.defaults.headers.common["Authorization-X"] = `${null}`;
};

const myInterceptorSuccess = function (response) {
  if (response.status === 200 && response.data) {
    if (response.data === true && response.data.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  }
};

const myInterceptorError = function (err) {
  console.log(err);
  if (!err.response) {
    const errorMessage = { message: "Network Error!" };
    throw errorMessage;
  }

  if (err.response.status === 401) {
  }
  return false;
};

const createAxios = (url) =>
  axios.create({
    baseURL: `/${url}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    validateStatus(status) {
      return status === 200;
    },
  });

let getUsers = createAxios("users");

const axiosRequests = [getUsers];

for (const element of axiosRequests) {
  element.interceptors.response.use(myInterceptorSuccess, myInterceptorError);
}

const ApiService = {
  getUsers: getUsers,
};

export { setTokenService, setNullTokenService };
export default ApiService;
