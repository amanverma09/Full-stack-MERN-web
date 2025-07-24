import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateUser.css";

const CreateUser = () => {
  const [user, setuser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    const sendData = await axios.post("http://localhost:3000/api/users/", user);
    // console.log(sendData);
    sendData.data && alert("User Created");
    navigate("/");
  };
  return (
    <div className="form-container">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={onChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={onChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={onChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
