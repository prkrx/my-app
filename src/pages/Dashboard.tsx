import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth || !auth.user) {
    return <p>Anda belum login! <button onClick={() => navigate("/")}>Login</button></p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Selamat datang, {auth.user.email}!</p>
      <button onClick={() => { auth.logout(); navigate("/"); }}>Logout</button>
    </div>
  );
};

export default Dashboard;
