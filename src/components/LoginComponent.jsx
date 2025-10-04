import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../security/AuthProvider";
export default function LoginComponent({ setAuthentication }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const authContext = useAuth();
  const navigate = useNavigate();
  const login = () => {
    const isAuthenticated = authContext.login(username, password);
    console.log(authContext)
    if (!isAuthenticated) {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      navigate(`/welcome/${username}`);
    }
    console.log(`Print again`)
    console.log(authContext)
  };
  return (
    <div className="container loginContainer">
      <div>
        {isSuccess && <h2>Authentication Sucessful!!</h2>}
        {isError && <h2>Invalid Credentials</h2>}
        <h1>Welcome to Login Page</h1>
      </div>
      <div>
        <div className="mb-3">
          <label htmlFor="usernamne">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}
