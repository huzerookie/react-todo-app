import { apiClient } from "../client/ApiClient";

const LoginService = {
  login: (token) => apiClient.get('/login',{
    headers: {
      Authorization: token
    }
  }), 

};

export default LoginService;