import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    // console.log(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <lable>Email:</lable>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>

      <lable>Password:</lable>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>

      <button diabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
