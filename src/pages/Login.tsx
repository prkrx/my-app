import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const auth = useContext(AuthContext);
  if (!auth) {
    return <p>Loading...</p>;
  }

  const { login } = auth;

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      navigate("/dashboard"); // Redirect ke Dashboard
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text="Login" onClick={handleLogin} />
    </div>
  );
};

export default Login;
