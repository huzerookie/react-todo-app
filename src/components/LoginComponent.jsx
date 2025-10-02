import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function LoginComponent({ setAuthentication }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
const navigate = useNavigate();
  const login = (e) => {
    if (username === "test" && password === "123") {
      setSuccess(true);
      setError(false);
      navigate(`../welcome/${username}?user=Huzefa`)
      return;
    }
    setError(true);
    setSuccess(false);
  };
  return (
    <div className="loginContainer">
      <div>
        {isSuccess && <h2>Authentication Sucessful!!</h2>}
        {isError && <h2>Invalid Credentials</h2>}
        <h1>Welcome to Login Page</h1>
      </div>
      <div>
        <div>
          <label htmlFor="usernamne">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
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
