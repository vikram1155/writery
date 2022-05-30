import { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
        <hr />
        <label htmlFor="">Having an account already?</label>
        <button className="registerLoginButton">
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
      </form>
      <br></br>
      {error && <span>User credentials taken already!</span>}
    </div>
  );
}
