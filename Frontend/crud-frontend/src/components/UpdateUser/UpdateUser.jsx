import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateUser.css";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setuser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const getSingleUser = async () => {
    try {
      const response = await axios.get(
        `https://front-end-wine-xi.vercel.app/api/users/${id}`
      );
      setuser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendData = await axios.put(
        `https://front-end-wine-xi.vercel.app/api/users/${id}`,
        user
      );
      if (sendData.data) {
        alert("User Updated");
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="form-container">
      <h1>Update User</h1>
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
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
