import "../css/LoginComponent.css";
import { useState } from "react";
export default function LoginComponent({ setAuthentication }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  
  const login = (e) => {
    if (username === "test" && password === "123") {
      setSuccess(true);
      setError(false);
      setAuthentication(true);
      return;
    }
    setError(true);
    setSuccess(false);
    setAuthentication(false);
  };
  return (
    <div className="loginContainer">
      <div>
        {isSuccess && <h2>Authentication Sucessful!!</h2>}
        {isError && <h2>Invalid Credentials</h2>}
        <h1>Welcome to Login Page</h1>
      </div>
      <div>
        <form>
          <label htmlFor="usernamne">Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Login</button>
        </form>
      </div>
    </div>
  );
}
