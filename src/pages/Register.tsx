import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registering:", { username, email, password });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text="Register" onClick={handleRegister} />
    </div>
  );
};

export default Register;
